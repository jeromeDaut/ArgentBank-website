import React from 'react';
import Transaction from '../components/Transaction';
import Account from '../components/Account';

const Profile = () => {
    return (
        <>
          <main className='main bg-dark'>
            <Account/>
            <Transaction/>
          </main>  
        </>
    );
};

export default Profile;