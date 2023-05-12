import React from 'react';
import Account from '../components/account/Account';
import HeaderUser from '../components/headerUser/headerUser';
import { useSelector } from 'react-redux';
import {loginSuccess } from '../app/slice/usersSlice';

const User = () => {
  
  const token = useSelector((state) => state.token);
  loginSuccess(token)
    return (
        <>
          <main className='main bg-dark'>
          <HeaderUser />
          <Account />
          </main>  
        </>
    );
};

export default User;