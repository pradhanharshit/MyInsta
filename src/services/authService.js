import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginHandler = createAsyncThunk(
  "auth/login",
  async ({ username, password, rememberMe }) => {
    const res = await axios.post("api/auth/login", { username, password });
    if (rememberMe) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: res.data.foundUser.username,
          _id: res.data.foundUser._id,
          firstName: res.data.foundUser.firstName,
          lastName: res.data.foundUser.lastName,
        })
      );
      localStorage.setItem("token", res.data.encodedToken);
    }
    return res.data;
  }
);
