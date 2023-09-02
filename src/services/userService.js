import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// to get the data of currently loggedIn user
export const getOwnerData = createAsyncThunk(
  "users/ownerdata",
  async (ownerid) => {
    try {
      // console.log("tried");
      const res = await axios.get(`/api/users/${ownerid}`);
      return res.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

// to get data of the any user
export const getUserData = createAsyncThunk(
  "users/userdata",
  async (userid) => {
    try {
      const res = await axios.get(`/api/users/${userid}`);
      return res.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllUsers = createAsyncThunk("user/allusers", async () => {
  try {
    const res = await axios.get("/api/users");
    return res.data.users;
  } catch (error) {
    console.log(error);
  }
});
