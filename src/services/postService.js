import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPostHandler = async (postData, authToken) => {
  try {
    await axios.post(
      "api/posts",
      { postData },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = createAsyncThunk("posts/getallposts", async () => {
  try {
    const res = await axios.get("api/posts");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
});
