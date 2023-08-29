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
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const deletePostHandler = async (postId, authToken) => {
  try {
    await axios.delete(`api/posts/${postId}`, {
      headers: {
        authorization: authToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editPostHandler = async (postId, postData, authToken) => {
  try {
    await axios.post(
      `api/posts/edit/${postId}`,
      {
        postData,
      },
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
