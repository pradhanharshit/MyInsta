import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToBookmark = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const removeFromBookmark = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getBookmarks = createAsyncThunk(
  "posts/getbookmarks",
  async (authToken) => {
    try {
      const res = await axios.get("api/users/bookmark", {
        headers: {
          authorization: authToken,
        },
      });
      return res.data.bookmarks;
    } catch (err) {
      console.log(err);
    }
  }
);
