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
  },
  reducers: {
    changeCurrentId(state, action) {
      state.currentId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOwnerData.fulfilled, (state, action) => {
      state.ownerData = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload.data.user;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });
  },
});

export const { changeCurrentId } = userSlice.actions;
export default userSlice.reducer;
