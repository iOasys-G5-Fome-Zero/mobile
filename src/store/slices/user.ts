import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  avatar: string;
  name: string;
}

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      email: "",
      avatar: "",
      name: "",
    },
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
