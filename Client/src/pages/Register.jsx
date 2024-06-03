import React, { useState } from 'react';
import regimg from '/file.png';
import '../App.css';

const Register = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone_number: "",
    Password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div id='reg' className="container">
      <div className="img-fluid">
        <img src={regimg} alt="Registration" />
      </div>
      <div className="form">
        <h1 style={{textAlign:"center"}}>Registration Form</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" name="Name" value={user.Name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="Email" value={user.Email} onChange={handleChange} aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="exampleInputPhone1" name="Phone_number" value={user.Phone_number} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="Password" value={user.Password} onChange={handleChange} />
          </div>
          <div className='d-flex'>
            <button style={{backgroundColor:"purple",color:"white",fontSize:"18px"}} type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
