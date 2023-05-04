import React from 'react';
import Account from '../components/account/Account';
import HeaderUser from '../components/headerUser/headerUser';
import { useSelector } from 'react-redux';
import { getProfile } from '../app/services/getProfile';

const User = () => {
  const token = useSelector((state) => state.userReducer.token);
  getProfile(token)
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