import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from '../store';
import axios from "axios";

// Asynchronous action creator for user login
export const login = createAsyncThunk(
    'userSlice/login',
    async (userData) => {
      const {data} = await axios.post("http://localhost:3001/api/v1/user/login", userData);
      // console.log(data.body)
      return data.body;
    }
  );

// Asynchronous action creator for getting user profile
export const getProfile = createAsyncThunk(
    'userSlice/getProfile',
    async () => {  
      const token = store.getState().usersReducer.token     
      const {data} = await axios.post("http://localhost:3001/api/v1/user/profile", {token},
      { headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
      );
      //  console.log(data.body)
      return data.body;
    }
  );

// Asynchronous action creator for updating user name
export const PutUserName = createAsyncThunk(
  'userSlice/PutUserName',
  async (userName) => { 
    const token = store.getState().usersReducer.token      
    const {data} = await axios.put("http://localhost:3001/api/v1/user/profile", {userName},
    { headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
    );
      console.log(data)
    return data;
  }
);

// Initial state for the users slice
const initialState={
    token: localStorage.getItem('token') || null,
    isLoggedIn: localStorage.getItem('token') ? true : false,
    currentUser: {},
    error: null,
}

// Create the users slice
const usersSlice= createSlice({
    name:'userSlice',
    initialState,
    reducers:{  
      // Reducer for user logout    
      logout(state) {
        state.token = null;
        localStorage.clear();
        state.isLoggedIn= false;
        state.currentUser = {};
        state.error = null;
      },
    },

    extraReducers: (builder) => {      
      builder.addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        state.error = null;
        state.isLoggedIn=true;        
      })

      builder.addCase(login.rejected, (state, action) => {        
        localStorage.clear();
        state.error = action.error.message;
        console.log(state.error);
        state.isLoggedIn=false;        
      })

      builder.addCase(getProfile.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        // console.log(state.currentUser);
      })

      builder.addCase(PutUserName.fulfilled, (state, action) => {
         state.currentUser = action.payload.body;
         // console.log(action.payload.body);
      })
        
      
    },
      
    
})

export const {  logout } = usersSlice.actions;
export default usersSlice.reducer