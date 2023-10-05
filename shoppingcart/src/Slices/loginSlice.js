import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'Login',
  initialState: { userLogin: [] },
  reducers: {
    addLogin(state, action) {
      state.userLogin=action.payload
    },      
  },
});

export const { addLogin } = loginSlice.actions;
export default loginSlice.reducer;
