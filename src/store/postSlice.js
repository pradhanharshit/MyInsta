import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../services/postService";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    newPostAdded: true,
    postUpdated: true,
  },
  reducers: {
    addedNewPost(state) {
      state.newPostAdded = !state.newPostAdded;
    },
    onPostUpdate(state) {
      // console.log("called");
      state.postUpdated = !state.postUpdated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload.data.posts;
      // console.log(state.allPosts);
    });
  },
});

export const { addedNewPost, onPostUpdate } = postSlice.actions;
export default postSlice.reducer;
