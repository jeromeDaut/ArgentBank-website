import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import User from './Pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signIn/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;