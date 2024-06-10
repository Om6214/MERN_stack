import React, { useState, useEffect } from "react";
import "./adminCont.css"
import { toast } from "react-toastify";

const AdminCont = () => {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("Token");

  const fetchCont = async () => {
    try {
      const response = await fetch("https://mern-stack-1-hjpa.onrender.com/admin/getcontacts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCard(data.result);
      } else {
        console.error("Failed to fetch contacts");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  const deleteMsg = async(id) =>{
    try {
      const response = await fetch(`https://mern-stack-1-hjpa.onrender.com/admin/getcontacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      console.log(response)
      if(response.ok){
        toast.success("Message deleted",{
          theme:"dark",
          autoclose:2000,
          position:"top-center"
        })
        fetchCont();
      }
    } catch (error) {
      console.log("message unabel to delete")
    }
  }

  useEffect(() => {
    fetchCont();
  }, []);

  return (
    <>
      <h1 style={{textAlign:"center"}} className="header">All contact</h1>
      <div className="aldiv">
        <table className="tab">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {card.map((curEle, index) => {
              const { Name, Email, Message } = curEle;
              return (
                <tr key={index}>
                  <td>{Name}</td>
                  <td>{Email}</td>
                  <td>{Message}</td>
                  <td>
                    <span onClick={()=>deleteMsg(curEle._id)} id="del">
                      <i className="fa-solid fa-trash"></i>
                    </span>
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

export default AdminCont;
