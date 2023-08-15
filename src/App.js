import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.js";
import ForgetPasswordPage from "../src/Pages/Login/ForgetPasswordPage";
import Auth from "./Pages/Login/Login.js";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/badreq" element={<Error />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
