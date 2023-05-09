import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { signIn as authSignIn } from "./authSlice";
// import { navigate } from "../utils/navigation";
// import { useNavigate } from "react-router-dom";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );
      const { status, body } = response.data;
      if (status === 200) {
        const token = body.token;
        dispatch(signIn({ token }));
        // useNavigate("./user");
        localStorage.setItem("token", token);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: false,
};

const userTokenSlice = createSlice({
  name: "userTokenSlice",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      localStorage.clear();
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = userTokenSlice.actions;
export default userTokenSlice.reducer;