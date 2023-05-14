import React from 'react';
import Account from '../components/account/Account';
import HeaderUser from '../components/headerUser/headerUser';

const User = () => {

  return (
    <>
      <main className='main bg-dark'>
        <HeaderUser  />
        <Account  />
      </main>  
    </>
  );
};

export default User;