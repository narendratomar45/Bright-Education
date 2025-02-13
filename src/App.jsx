import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import OurCourses from "./Pages/OurCourses";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/ourCourses" element={<OurCourses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
