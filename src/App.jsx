import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Connect from './pages/Connect';

import About from './pages/About';
import Menu from './pages/Menu';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Location from './pages/Location'; 
import SignIn from './pages/SignIn';



function LayoutRoutes() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/signin";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details/:mealName" element={<Details />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Desi-Eats/confirmation" element={<Confirmation />} />

        <Route path="/checkout" element={<Checkout />} />


      </Routes>

      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Desi-Eats">
      <LayoutRoutes />
    </BrowserRouter>
  );
}

export default App;
