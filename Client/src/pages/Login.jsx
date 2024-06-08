import React, { useState } from "react";
import logimg from "/file(1).png";
import "../pages/login.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../storage/auth";
import { toast } from 'react-toastify'

const Login = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate()
  const {storeTokeninLS} = useAuth()
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if(response.ok){
        const data = await response.json()
        storeTokeninLS(data.token)
        toast.success("Login successfull",{
          theme:"dark",
          autoClose:2000
        })
        navigate('/')
      }
      else{
        const data = await response.json()
        toast.error(data.message,{
          theme:"dark",
          position:"bottom-right",
          autoClose:2000
        })
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img src={logimg} alt="login" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1>Login</h1>
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="w-75 d-flex flex-direction-col justify-content-center"
            >
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={user.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={user.Password}
                  onChange={handleChange}
                />
              </div>
              <div className="button d-flex justify-content-center">
                <button
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    fontSize: "18px",
                  }}
                  type="submit"
                  className="btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
