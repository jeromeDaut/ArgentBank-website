import React from 'react';
import Transaction from '../components/Transaction';
import Account from '../components/Account';

const User = () => {
    return (
        <>
          <main className='main bg-dark'>
            <Account/>
            <Transaction/>
          </main>  
        </>
    );
};

export default User;