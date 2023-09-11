import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getPagedPosts } from "../services/postService";
import { getBookmarks } from "../services/bookmarkService";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    homeFeedPosts: [],
    bookmarkedPosts: [],
    newPostAdded: true,
    postUpdated: true,
    pageNum: 0,
    totalPages: 0,
    pagedPosts: [],
    postStatus: "idle",
    pagedPostStatus: "idle",
  },
  reducers: {
    addedNewPost(state) {
      state.newPostAdded = !state.newPostAdded;
    },
    onPostUpdate(state) {
      state.postUpdated = !state.postUpdated;
    },
    setPageNum(state) {
      state.pageNum =
        state.pageNum + 1 > state.totalPages
          ? state.totalPages
          : state.pageNum + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.homeFeedPosts = JSON.parse(JSON.stringify(action.payload));
      state.totalPages = Math.ceil(action.payload.length / 4);
    });
    builder.addCase(getBookmarks.fulfilled, (state, action) => {
      state.bookmarkedPosts = action.payload;
    });
    builder
      .addCase(getPagedPosts.fulfilled, (state, action) => {
        state.pagedPostStatus = "fulfilled";
        state.pagedPosts = action.payload;
      })
      .addCase(getPagedPosts.pending, (state) => {
        state.pagedPostStatus = "pending";
      })
      .addCase(getPagedPosts.rejected, (state) => {
        state.pagedPostStatus = "rejected";
      });
  },
});

export const { addedNewPost, onPostUpdate, setPageNum } = postSlice.actions;
export default postSlice.reducer;
