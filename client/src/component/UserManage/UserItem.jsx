import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://localhost:5005/users";

function UserItem({ item, getUser }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(name, email, password);

  // AXIOS ACTIONS
  function updateUser(user, id) {
    axios
      .put(`${baseURL}/${id}`, {
        ...user,
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        getUser();
      })
      .catch((err) => console.log(err));
  }

  const deleteUser = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      getUser();
    });
  };

  // DELETE DIALOG
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* <input
          type="text"
          style={{ cursor: "pointer" }}
          placeholder="Change your name..."
          onChange={(e) => setName(e.target.value)}
        /> */}

          <span style={{ cursor: "pointer" }}>
            <>
              <Button variant="outlined" onClick={(e) => setOpenUpdate(true)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
              <Dialog open={openUpdate} onClose={(e) => setOpenUpdate(false)}>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Typography variant="h4" sx={{ marginBottom: "30px" }}>
                      Choose your options to update your information
                    </Typography>
                    <Stack spacing={3}>
                      <TextField
                        sx={{ fontSize: "20px" }}
                        id="outlined-basic"
                        required
                        variant="standard"
                        label="Name"
                        value={item.name}
                        onChange={(e) => setName(e.target.value)}
                      />

                      <TextField
                        required
                        variant="standard"
                        label="Email"
                        value={item.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <TextField
                        required
                        variant="standard"
                        label="Password"
                        value={item.password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      setOpenUpdate(false);
                    }}
                  >
                    Cancle
                  </Button>
                  <Button
                    onClick={(e) => {
                      setOpenUpdate(false);
                      updateUser(item, item.id);
                      toast.success("Update Successfull !");
                    }}
                    autoFocus
                  >
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          </span>

          <span style={{ cursor: "pointer" }}>
            <>
              <Button variant="outlined" onClick={(e) => setOpenDelete(true)}>
                <i
                  style={{ color: "red" }}
                  className="fa-solid fa-trash-can"
                ></i>
              </Button>
              <Dialog open={openDelete} onClose={(e) => setOpenDelete(false)}>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    If you agree, your account will be permanently deleted.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      setOpenDelete(false);
                    }}
                  >
                    Disagree
                  </Button>
                  <Button
                    onClick={(e) => {
                      setOpenDelete(false);
                      deleteUser(item.id);
                      toast.success("Delete Successfull !");
                    }}
                    autoFocus
                  >
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          </span>
        </td>
      </tr>
    </>
  );
}

export default UserItem;
