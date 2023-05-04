import { createSlice } from "@reduxjs/toolkit"


const initialState={
    token: (localStorage.getItem('token')?localStorage.getItem('token'):null),
    // token: null,
    isLoggedIn: false,
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
        }
    }
})

export const {signIn, signOut} = userSlice.actions
export default userSlice.reducer