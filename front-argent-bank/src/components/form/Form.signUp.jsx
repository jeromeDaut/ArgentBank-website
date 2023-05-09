import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FormSignUp = () => {

    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    function handleSignUpSubmit(e) {
    e.preventDefault();
    
    axios.post('http://localhost:3001/api/v1/user/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userName: userName
    })
    .then(res =>{
      console.log(res.data)
      if (res.data.status === 200) {
        const token = res.data.body.token;

        navigate("../login");

        localStorage.setItem('token', token);
        alert('Your account has been successfully created')

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUpSubmit}>
      {error && <div>{alert(error.toString())}</div>}
      <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
      <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      <div className="input-wrapper">
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' />
        </div>
        
        <button type='submit' className="sign-in-button">Sign Up</button>
        <br/>
        <Link to="/login">return Sign In</Link>

      </form>

    </section>
    );
};

export default FormSignUp;