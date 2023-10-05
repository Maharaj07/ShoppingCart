import { createSlice } from "@reduxjs/toolkit";

const ini=[{email:"siva@gmail.com",
password:123456,},{email:"siva@gmail.com",
password:123456,}]
export const AdminLoginSlice = createSlice({
  name: 'AdminLogin',
  initialState: ini,
  reducers: {
        
  },
});

export const {  } = AdminLoginSlice.actions;
export default AdminLoginSlice.reducer;
