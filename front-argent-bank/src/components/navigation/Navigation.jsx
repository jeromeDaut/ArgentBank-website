import React from 'react';
import { Link} from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { logout } from '../../app/slice/usersSlice';
import {HiUserCircle} from 'react-icons/hi2'
import {FaSignOutAlt} from 'react-icons/fa'

const Navigation = () => {

  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  const dispatch = useDispatch();
  let userName  = useSelector((state) => state.usersReducer.currentUser.userName) ;

  const handleSignOut = () => {
    dispatch(logout());
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
          width="200"
          height="54"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='align-nav-item'>
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="login/dashboard">
              <HiUserCircle className="fa fa-user-circle" />
              <span>{userName}</span>
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleSignOut}>
              <FaSignOutAlt />
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <HiUserCircle />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;