import { createSlice } from '@reduxjs/toolkit';

const WebSlice = createSlice({
  name: 'web',
  initialState: {
    go: false,
    url: ''
  },
  reducers: {
    setWeb: (state, { payload }) => {
      state.url = payload.url;
      state.go = payload.go;
    }
  }
});

export const { setWeb } = WebSlice.actions;

export default WebSlice.reducer;
