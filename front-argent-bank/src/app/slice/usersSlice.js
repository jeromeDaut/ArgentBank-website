import { createSlice } from "@reduxjs/toolkit"
import { register } from "../services/register";


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
        signIn:(state, action)=>{
            state.token = action.payload.token;
            state.isLoggedIn=true
        },
        signOut:(state)=>{
            localStorage.clear();
            state.token=null;
            state.isLoggedIn=false
        },
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
          })
          .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
        }
    }
})

export const {signIn, signOut} = userSlice.actions
export default userSlice.reducer