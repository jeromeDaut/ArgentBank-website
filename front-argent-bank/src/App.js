import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound';
import { useSelector } from 'react-redux';

const App = () => {

  const errorOccurred = false;
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/login/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        {errorOccurred && <Navigate to="*" />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
