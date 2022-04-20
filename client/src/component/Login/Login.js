import React, { useState } from "react";
import "./LoginPage.scss";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice.js";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState();

  // fetch data and save it to localStorage
  // useEffect(() => {
  //   fetch("http://localhost:3003/users")
  //     .then((response) => response.json())
  //     .then((data) => localStorage.setItem("users", JSON.stringify(data)));

  //   const getData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3003/users");
  //       return res.data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // }, []);

  // get users from localStorage
  // const datas = JSON.parse(localStorage.getItem("users"));

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refresh_token });
      setUser({
        ...user,
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.access_token);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.access_token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Login function
  const login = (e) => {
    axios
      .post("/auth/login", user)
      .then((response) => {
        localStorage.setItem(
          "access_token",
          JSON.stringify({
            access_token: response.data.access_token,
          })
        );
        setError("");
        dispatch(loginActions.login());
        navigate("/");
      })
      .catch((error) => setError(error.response.data.message));
  };

  // Submit func
  const handleSubmit = (e) => {
    e.preventDefault();
    login();

    // if (datas) {
    //   datas.forEach((item, index) => {
    //     if (item.email === user.email && item.password === user.password) {
    //       dispatch(loginActions.login());
    //       navigate("/");
    //     }
    //   });
    // } else {
    //   console.log("no datas");
    // }
  };

  return (
    <div id="loginPage">
      <div className="loginPage__banner">
        <div className="blur-overlay" />
        <h3>Login To Order</h3>
      </div>
      <div className="loginPage__container">
        <h3>Log In</h3>
        <p className="login-msg">{error}</p>
        <form onSubmit={handleSubmit}>
          <div className="loginPage__formItems">
            <label>Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="loginPage__formItems">
            <label>Your Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="on"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button className="btn">SUBMIT</button>
        </form>

        <div className="to-signUp">
          <span>Don't have account yet ? </span>
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={(e) => {
              dispatch(loginActions.login());
              navigate("/signup");
            }}
          >
            Let's sign up with us ! (Register here)
          </span>
        </div>
      </div>
    </div>
  );
}
