import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getOwnerData } from "../services/userService";

const userSlice = createSlice({
  name: "user",
  initialState: {
    ownerData: {},
    allUsers: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getOwnerData.fulfilled, (state, action) => {
      state.ownerData = action.payload.data.user;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default userSlice.reducer;
