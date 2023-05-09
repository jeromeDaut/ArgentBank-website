import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
    'userSlice/register',
    async (userData) => {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", userData);
      return response.data.body;
    }
  );

const initialState={
    token: localStorage.getItem('token') || null,
    isLoggedIn: false,
    email: null,

    password: null,
    firstName: null,
    lastName: null,
    userName: null,
    loading: false,
    error: null
}

const userSlice= createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        extraReducers: (builder) => {
            builder
          .addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
          })
          .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
        
        }
    }
})

export const {signIn, signOut} = userSlice.actions
export default userSlice.reducer
