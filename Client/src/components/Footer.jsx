import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div id="left">
          <div className="collect">
            <img src="/gg.jpg" alt="GadgetGrooves Logo" />
            <h1>GadgetGroove</h1>
          </div>
          <p>
          Discover the latest in electronics at unbeatable prices. From cutting-edge gadgets to everyday essentials, we bring you top brands and innovative technology.
          </p>
          <p>© 2024 GadgetGroove. All rights reserved. Privacy Policy | Terms of Service</p>
          <div className="logos">
          <a href=""><i class="fa-brands fa-square-twitter"></i></a><a href="https://github.com/Om6214" target="_blank"><i class="fa-brands fa-github"></i></a><a href="https://www.linkedin.com/in/omnathganapure/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div id="right">
          <div className="my-account">
            <h3>MY ACCOUNT</h3>
            <ul>
              <li><NavLink id="bn" to="#">Orders</NavLink></li>
              <li><NavLink id="bn" to="#">My Account</NavLink></li>
              <li><NavLink id="bn" to="#">Checkout</NavLink></li>
              <li><NavLink id="bn" to="#">Downloads</NavLink></li>
              <li><NavLink id="bn" to="#">Account details</NavLink></li>
            </ul>
          </div>
          <div className="categories">
            <h3>CATEGORIES</h3>
            <ul>
              <li><NavLink id="bn" to="#">Hydraulic</NavLink></li>
              <li><NavLink id="bn" to="#">Atomtronics</NavLink></li>
              <li><NavLink id="bn" to="#">Cryotronics</NavLink></li>
              <li><NavLink id="bn" to="#">Induction</NavLink></li>
              <li><NavLink id="bn" to="#">Spintronics</NavLink></li>
              <li><NavLink id="bn" to="#">Pro Electron</NavLink></li>
            </ul>
          </div>
          <div className="information">
            <h3>INFORMATION</h3>
            <ul>
              <li><NavLink id="bn" to="/about">About Us</NavLink></li>
              <li><NavLink id="bn" to="#">Delivery Information</NavLink></li>
              <li><NavLink id="bn" to="#">Privacy Policy</NavLink></li>
              <li><NavLink id="bn" to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
