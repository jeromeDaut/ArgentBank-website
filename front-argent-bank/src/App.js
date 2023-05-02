import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;