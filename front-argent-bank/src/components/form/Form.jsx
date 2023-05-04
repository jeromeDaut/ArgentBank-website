import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../app/slice/usersSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
 
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
      axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password
      })
      .then(res =>{
        console.log(res.data)
        if (res.data.status === 200) {
          const token = res.data.body.token;
  
          dispatch(signIn({ token:token }));
          navigate("./user");
  
          localStorage.setItem('token', token);
        }
        else {
          alert(res.data.message);
        }
        
      })
    .catch (err=> {
      console.log(err);
      setError(err);
    })
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" required/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" >Password</label>
          <input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' />
      {error && <div style={{color: "red"}}><br/>{'The email or password is incorrect.'}</div>}
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