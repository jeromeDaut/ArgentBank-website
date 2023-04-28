import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import User from './Pages/User';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
         <Navigation/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signIn/user" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;