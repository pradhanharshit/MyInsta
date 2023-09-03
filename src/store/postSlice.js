import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getAllPostsFromUsername } from "../services/postService";
import { getBookmarks } from "../services/bookmarkService";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    homeFeedPosts: [],
    exploreFeedPosts: [],
    bookmarkedPosts: [],
    userPosts: [],
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
      state.homeFeedPosts = JSON.parse(JSON.stringify(action.payload));
      state.exploreFeedPosts = action.payload;
    });
    builder.addCase(getBookmarks.fulfilled, (state, action) => {
      state.bookmarkedPosts = action.payload;
      console.log(state.bookmarkedPosts);
    });
    builder.addCase(getAllPostsFromUsername.fulfilled, (state, action) => {
      state.userPosts = action.payload;
      console.log(state.userPosts);
      // console.log(state.userPosts);
    });
  },
});

export const { addedNewPost, onPostUpdate } = postSlice.actions;
export default postSlice.reducer;
