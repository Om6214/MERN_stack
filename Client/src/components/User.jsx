import React, { useEffect, useState } from "react";
import "./User.css";

const User = () => {
  const [card, setcard] = useState([]);
  const fetchuser = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/getusers", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setcard(data.result);
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  useEffect(() => {
    fetchuser();
  }, []);

  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"20px"}}>All Users</h1>
      <div className="aldiv">
        {card.map((curEle, index) => {
          const { Name, Email, Phone_number, isAdmin } = curEle;
          return (
            <div className="admin-panel" key={index}>
              {isAdmin == true ? <h1>Admin</h1> : <h1>User</h1>}
              <div className="user-info">
                <div className="info-item">
                  <span className="label">Name:</span>
                  <span className="value">{Name}</span>
                </div>
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span className="value">{Email}</span>
                </div>
                <div className="info-item">
                  <span className="label">Phone Number:</span>
                  <span className="value">{Phone_number}</span>
                </div>
                <div className="button">
                  <button style={{ color: "black" }}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default User;
