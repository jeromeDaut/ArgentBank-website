import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import SignIn from './Pages/SignIn';
import User from './Pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/login/user" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;