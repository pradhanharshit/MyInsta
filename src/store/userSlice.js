import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getOwnerData,
  getUserData,
} from "../services/userService";

const userSlice = createSlice({
  name: "user",
  initialState: {
    ownerData: {},
    userData: {},
    allUsers: [],
    currentId: "",
    userEdited: false,
  },
  reducers: {
    changeCurrentId(state, action) {
      state.currentId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOwnerData.fulfilled, (state, action) => {
      state.ownerData = action.payload;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });
  },
});

export const { changeCurrentId } = userSlice.actions;
export default userSlice.reducer;
