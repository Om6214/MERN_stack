import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./updateUser.css";

const UpdateUser = () => {
  const location = useLocation();
  const { Name, Email, Phone_number, isAdmin, _id } = location.state;
  const navigate = useNavigate();

  const [data, setData] = useState({
    Name: "",
    Email: "",
    Phone_number: "",
    isAdmin: false,
  });

  useEffect(() => {
    setData({ Name, Email, Phone_number, isAdmin });
  }, [Name, Email, Phone_number, isAdmin]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://mern-stack-1-hjpa.onrender.com/admin/update/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Update done");
        navigate("/adminUser");
      } else {
        console.log("Failed to update user");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <form id="adminform" onSubmit={handleSubmit}>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="Name"
        id="Name"
        value={data.Name}
        onChange={handleChange}
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        name="Email"
        id="Email"
        value={data.Email}
        onChange={handleChange}
      />
      <label htmlFor="Phone_number">Phone</label>
      <input
        type="number"
        name="Phone_number"
        id="Phone_number"
        value={data.Phone_number}
        onChange={handleChange}
      />
      <div id="admin">
        <label htmlFor="isAdmin">Admin</label>
        <input
          type="checkbox"
          name="isAdmin"
          id="isAdmin"
          checked={data.isAdmin}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
