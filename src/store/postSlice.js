import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../services/postService";
import { getBookmarkedPosts } from "../services/bookmarkService";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    homeFeedPosts: [],
    bookmarkedPosts: [],
    newPostAdded: true,
    postUpdated: true,
  },
  reducers: {
    addedNewPost(state) {
      state.newPostAdded = !state.newPostAdded;
    },
    onPostUpdate(state) {
      state.postUpdated = !state.postUpdated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(getBookmarkedPosts.fulfilled, (state, action) => {
      state.bookmarkedPosts = action.payload;
    });
  },
});

export const { addedNewPost, onPostUpdate } = postSlice.actions;
export default postSlice.reducer;
