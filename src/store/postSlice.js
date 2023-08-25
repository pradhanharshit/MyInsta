import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../services/postService";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    allposts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default postSlice.reducer;
