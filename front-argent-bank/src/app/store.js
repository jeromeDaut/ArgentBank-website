import {configureStore} from '@reduxjs/toolkit';
import  usersReducer from "./slice/usersSlice";
// import transactionsReducer from './slice/transactionsSlice';

export const store = configureStore({
    reducer: { usersReducer, /*transactionsReducer*/},
})