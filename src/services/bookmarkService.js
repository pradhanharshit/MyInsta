import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addBookmarkHandler = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const removeBookmarkHandler = async (postId, authToken) => {
  try {
    const res = await axios.post(
      `api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarkedPosts = createAsyncThunk(
  "posts/getbookmark",
  async (authToken) => {
    try {
      const res = await axios.get("api/users/bookmark", {
        headers: {
          authorization: authToken,
        },
      });
      return res.data.bookmarks;
    } catch (error) {
      console.log(error);
    }
  }
);
