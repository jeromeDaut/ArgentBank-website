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
    userName: null,

    email: null,
    password: null,
    loading: false,
    error: null
}

const usersSlice= createSlice({
    name:'userSlice',
    initialState,
    reducers:{
      loginStart(state) {
        state.isLoggedIn = false;
        state.error = null;
      },
      loginSuccess(state, action) {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload); // Stockage du token dans le localStorage
        state.isLoggedIn=true;
        
      },
      loginFailure(state, action) {
        state.isLoggedIn = false;
        state.error = action.payload.error;
      },
      logout(state) {
        state.token = null;
        localStorage.clear();
        state.error = null;
        state.isLoggedIn = false;
      },
    }
})

export const {  loginStart, loginSuccess, loginFailure, logout } = usersSlice.actions;
export default usersSlice.reducer
