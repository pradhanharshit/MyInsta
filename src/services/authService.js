import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginHandler = createAsyncThunk(
  "auth/login",
  async ({ username, password, rememberMe }) => {
    console.log("called");
    const res = await axios.post("api/auth/login", { username, password });
    if (rememberMe) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: res.data.foundUser.email,
          _id: res.data.foundUser._id,
          firstName: res.data.foundUser.firstName,
          lastName: res.data.foundUser.lastName,
        })
      );
      localStorage.setItem("token", res.data.encodedToken);
    }
    console.log(res);
    return res.data;
  }
);
