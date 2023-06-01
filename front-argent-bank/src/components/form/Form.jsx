import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../app/slice/usersSlice';
import {HiUserCircle} from 'react-icons/hi2'

const Form = () => {
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Redux hooks
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleSubmit(e, id) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Dispatch login action and handle response
    dispatch(login({ email, password }))
      .then((response) => {
         // Store token in local storage
        localStorage.setItem('token', response.payload.token);
        // Navigate to dashboard after successful login
        navigate(`/login/dashboard`);
      })
      .catch((error) => {
        setError('Invalid email or password.');
      });
  }
  // Check if user is already logged in
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  if (isLoggedIn === false) {
    navigate('/login');
  }
    return (
      <section className="sign-in-content">
      <HiUserCircle className='sign-in-icon' />
      <h1>Sign In</h1>
      {/* Display error message if there is an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" required/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" >Password</label>
          <input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type='submit' className="sign-in-button">Sign In</button>
        <br/>
      </form>

    </section>
  );
};

export default Form;