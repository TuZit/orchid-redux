import React from "react";
import "./LoginPage.scss";

export default function Login() {
  return (
    <div id="loginPage">
      <div className="loginPage__banner">
        <div className="blur-overlay" />
        <h3>My Account</h3>
      </div>
      <div className="loginPage__container">
        <h3>Log In</h3>
        <form>
          <div className="loginPage__formItems">
            <label>Your Email *</label>
            <input type="text" placeholder="..." />
          </div>
          <div className="loginPage__formItems">
            <label>Your Password *</label>
            <input type="password" />
          </div>
        </form>
        <div className="loginPage__note">
          <div className="loginPage__note--remember">
            <input type="checkbox" defaultValue="remember" />
            <span>Remember Me</span>
          </div>
          <p>Lost your password ?</p>
        </div>
        <button className="btn">SUBMIT</button>
      </div>
    </div>
  );
}
