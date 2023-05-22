import React, { useEffect } from 'react';
import Account from '../components/account/Account';
import HeaderUser from '../components/headerUser/headerUser';
import { useDispatch} from 'react-redux';
import { getProfile } from '../app/slice/usersSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProfile());
}, [dispatch]);
  return (
    <>
      <main className='main bg-dark'>
        <HeaderUser  />
        <Account  />
      </main>  
    </>
  );
};

export default Dashboard;