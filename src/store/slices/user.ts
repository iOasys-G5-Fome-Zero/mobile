import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      avatar: '',
      userType: ''
    },
    logged: false
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },

    setLogged: (state, { payload }) => {
      state.logged = payload;
    }
  }
});

export const { setUser, setLogged } = UserSlice.actions;

export default UserSlice.reducer;
