import React, { useEffect, useState } from "react";
import "./User.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../baseURL";

const User = () => {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("Token");

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BaseUrl}/admin/getusers`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCard(data);
      } else {
        toast.error("Failed to fetch users", {
          theme: "dark",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("Error fetching users", {
        theme: "dark",
        autoClose: 2000,
      });
      console.error("Error is", error);
    }
  };
const navigate = useNavigate();

const handleNav = (Name,Email,Phone_number,isAdmin,_id)=>{
  navigate('/admin/users/edit', {state:{Name , Email,Phone_number,isAdmin,_id}});
}

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `${BaseUrl}/admin/getusers/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        toast.success("Data deleted Successfully", {
          theme: "dark",
          autoClose: 2000,
        });
        fetchUser();
      } else {
        toast.error("Failed to delete user", {
          theme: "dark",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("Error deleting user", {
        theme: "dark",
        autoClose: 2000,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>All Users</h1>
      <div className="aldiv">
        <table className="tab">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {card.map((curEle, index) => {
              const { Name, Email, Phone_number, isAdmin, _id } = curEle;
              return (
                <tr key={index}>
                  <td>{Name}</td>
                  <td>{Email}</td>
                  <td>{Phone_number}</td>
                  <td>{isAdmin ? <p>Admin</p> : <p>User</p>}</td>
                  <td>
                    <span id="del" onClick={() => deleteUser(_id)}>
                      <i className="fa-solid fa-trash"></i>
                    </span>
                    <span id="upd" onClick={()=>handleNav(Name,Email,Phone_number,isAdmin,_id)}><i className="fa-solid fa-pen-to-square"></i></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
