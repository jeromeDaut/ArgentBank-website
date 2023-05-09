import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
    'userSlice/register',
    async (userData) => {
      const response = await axios.post("http://localhost:3001/api/v1/user/signup", userData);
      return response.data.body;
    }
  );
  const initialState = {
    token: localStorage.getItem("token") || null,
    isLoggedIn: false,
    email: null,
  };