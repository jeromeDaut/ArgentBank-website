import {configureStore} from '@reduxjs/toolkit';
import  userTokenReducer from "./slice/userTokenSlice";
import  usersReducer from "./slice/usersSlice";


export const store = configureStore({
    reducer: {userTokenReducer, usersReducer},
})