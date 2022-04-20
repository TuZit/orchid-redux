import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import UserItem from "./UserItem.jsx";

import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://localhost:5005/users";

function UserManage() {
  const [users, setUsers] = useState();
  const [data, setData] = useState();
  // console.log(data);

  // GET USERS FROM SEVER
  const getUser = async () => {
    try {
      const res = await axios.get(baseURL);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // FETCH DATA WHEN MOUNT
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = axios.get("/");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // GET USER BY ID
  function getUserData(id) {
    axios
      .get(`${baseURL}/${id}`)
      .then((response) => {
        alert(JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="shop-details__banner">
        <div className="blur-overlay" />
        <h3>Manage User</h3>
      </div>

      {/* <div className="button-group">
        <label>Search by ID</label>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={() => getUserData(id)}>Search</button>
      </div> */}

      {/* table */}
      <table className="manage-table" style={{ marginTop: "80px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            <>
              {users.map((item, index) => (
                <UserItem key={index} item={item} getUser={getUser} />
              ))}
            </>
          ) : (
            "No data..."
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserManage;
