import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../app/slice/usersSlice';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleSubmit(e, id) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    dispatch(login({ email, password }))
      .then((response) => {
        localStorage.setItem('token', response.payload.token);
        navigate(`/login/dashboard/${currentUserId}`);
      })
      .catch((error) => {
        setError('Invalid email or password.');
      });
  }
  
  const currentUserId = useSelector((state) => state.usersReducer.currentUserId);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  if (isLoggedIn === false) {
    navigate('/login');
  }
    return (
      <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
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
        <Link  to="/login/signUp">Sign up</Link>
      </form>

    </section>
  );
};

export default Form;