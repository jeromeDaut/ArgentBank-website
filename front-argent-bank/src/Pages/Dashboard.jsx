import React, { useEffect } from 'react';
import Account from '../components/account/Account';
import HeaderUser from '../components/headerUser/headerUser';
import { useDispatch} from 'react-redux';
import { getProfile } from '../app/slice/usersSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  
  const accountData = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ];

useEffect(() => {
  dispatch(getProfile());
}, [dispatch]);


  return (
    <>
      <main className='main bg-dark'>
        <HeaderUser  />
        <>
        {/* Render account components */}
        {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
        ))}
        </>
      </main>  
    </>
  );
};

export default Dashboard;