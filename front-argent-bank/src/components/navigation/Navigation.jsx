import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/slice/usersSlice';
import { getProfile } from "../../app/services/getProfile";


const Navigation = () => {
  const location = useLocation();
  const isUserPage = location.pathname === "/login/user"; 
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token)
        .then((data) => {
        setFirstName(data.firstName);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isUserPage ? (
          <>
            <Link className="main-nav-item" to="">
              <i className="fa fa-user-circle"></i>
              <span>{firstName}</span>
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;