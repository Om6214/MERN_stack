import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div id="left">
          <div className="collect">
            <img src="/gg.jpg" alt="GadgetGrooves Logo" />
            <h1>GadgetGrooves</h1>
          </div>
          <p>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
        </div>
        <div id="right">
          <div className="my-account">
            <h3>MY ACCOUNT</h3>
            <ul>
              <li><a href="#">Orders</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Account details</a></li>
            </ul>
          </div>
          <div className="categories">
            <h3>CATEGORIES</h3>
            <ul>
              <li><a href="#">Hydraulic</a></li>
              <li><a href="#">Atomtronics</a></li>
              <li><a href="#">Cryotronics</a></li>
              <li><a href="#">Induction</a></li>
              <li><a href="#">Spintronics</a></li>
              <li><a href="#">Pro Electron</a></li>
            </ul>
          </div>
          <div className="information">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
