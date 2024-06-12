import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../storage/auth";

export const Navbar = () => {
  const { isAdmin, isLoggedIN } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container sticky-top">
      <div className="left">
        <NavLink to="/">
          <img id="logo" src="/gg.jpg" alt="GadgetGroove logo" />
        </NavLink>
        <NavLink id="name" to="/">
          GadgetGroove
        </NavLink>
      </div>
      <div className="right">
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul id="navlink" className={`naav ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" onClick={toggleMenu}>
              Service
            </NavLink>
          </li>
          {isLoggedIN ? (
            <>
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/logout" onClick={toggleMenu}>
                      Logout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin" onClick={toggleMenu}>
                      Admin
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/logout" onClick={toggleMenu}>
                    Logout
                  </NavLink>
                </li>
              )}
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" onClick={toggleMenu}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" onClick={toggleMenu}>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
