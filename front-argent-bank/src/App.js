import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/SignUp';

const App = () => {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/login/signUp" element={<SignUp />} />
        <Route path="/login/dashboard/:id" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;