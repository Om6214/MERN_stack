import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navbar } from "./components/Navbar";
import Error from "./components/Error";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import User from "./components/User";
import AdminCont from "./components/adminCont";
import AdminService from "./components/adminService";
import { useAuth } from "./storage/auth";

const App = () => {
  const { isAdmin } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        {isAdmin ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminUser" element={<User />} />
            <Route path="/adminCont" element={<AdminCont />} />
            <Route path="/adminService" element={<AdminService />} />
          </>
        ) : (
          <>
            <Route path="/adminUser" element={<Error />} />
            <Route path="/adminCont" element={<Error />} />
            <Route path="/adminService" element={<Error />} />
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
