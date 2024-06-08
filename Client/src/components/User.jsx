import React, { useEffect, useState } from "react";
import "./User.css";
import { toast } from "react-toastify";

const User = () => {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("Token");

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/getusers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCard(data);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error is", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/getusers/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(response.ok){
        toast.success("Data deleted Successfully",{
          theme:"dark",
          autoClose:2000
        })
        fetchUser();
      }
      else{
        toast.error("Failed to deleted User",{
          theme:"dark",
          autoClose:2000
        })
      }
    } catch (error) {
      console.error(error)
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
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {
            card.map((curEle,index)=>{
              const { Name , Email ,Phone_number, isAdmin} = curEle
              return(
                <tr key={index}>
                  <td>{Name}</td>
                  <td>{Email}</td>
                  <td>{Phone_number}</td>
                  <td>{isAdmin?<p>Admin</p>:<p>User</p>}</td>
                  <td><span id="del" onClick={()=>deleteUser(curEle._id)}><i class="fa-solid fa-trash"></i></span><span id="upd"><i class="fa-solid fa-pen-to-square"></i></span></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
};

export default User;
