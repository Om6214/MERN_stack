import React from "react";
import "./Admin.css";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <>

    <h1 style={{textAlign:"center"}}>Admin panel</h1>
      <div className="adminpanel">
        <div className="adminbtn">
          <NavLink to="/adminUser">Users</NavLink>
        </div>
        <div className="adminbtn">
          <NavLink to="/adminCont">Contacts</NavLink>
        </div>
        <div className="adminbtn">
          <NavLink to="/adminService">Services</NavLink>
        </div>
      </div>
    </>
  );
};

export default Admin;
