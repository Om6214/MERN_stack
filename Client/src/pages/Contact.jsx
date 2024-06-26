import React, { useState } from "react";
import "../pages/login.css";
import Footer from "../components/Footer";
import { useAuth } from "../storage/auth";
import { toast } from "react-toastify";
import { BaseUrl } from "../../baseURL";

const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [userData, setuserData] = useState(true);

  const { detail } = useAuth();

  if (userData && detail) {
    setUser({
      Name: detail.Name,
      Email: detail.Email,
      Message: "",
    });
    setuserData(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BaseUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });


    if (response.ok) {
      toast.success("Message sent", {
        theme: "dark",
        position: "top-center",
      });
      setUser({
        Name: detail.Name,
        Email: detail.Email,
        Message: "",
      });
    }
    else{
      toast.error(data.message,{
        theme:"dark",
        position:"bottom-right"
      })
    }
  };
  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.590112894604!2d73.07610224607842!3d19.159900325257073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bff002c14769%3A0x9da6d7db2f2157ae!2sChandresh%20Manor%20Society!5e0!3m2!1sen!2sin!4v1717420732928!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1>Contact Us</h1>
            <form
              onSubmit={handleSubmit}
              className="w-75 d-flex flex-direction-col justify-content-center"
            >
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  id="Name"
                  aria-describedby="emailHelp"
                  value={user.Name}
                  onChange={handleChange}
                />
              </div>
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
                <label htmlFor="Message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="Message"
                  name="Message"
                  rows="3"
                  value={user.Message}
                  onChange={handleChange}
                ></textarea>
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

export default Contact;
