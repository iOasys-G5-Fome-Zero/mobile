import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      user_types: '',
      avatar: ''
    }
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    }
  }
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
