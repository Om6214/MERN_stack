import React, { useState, useEffect } from "react";
import "./User.css"

const adminCont = () => {
  const [card, setcard] = useState([]);
  const fetchCont = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/getcontacts", {
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
    fetchCont();
  }, []);
  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"20px"}}>All contact</h1>
    <div className="aldiv">
      {card.map((curEle, index) => {
        const { Name, Email, Message } = curEle;
        return (
          <div className="admin-panel" key={index}>
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
                <h6 className="label">Message</h6>
                <p className="value">{Message}</p>
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

export default adminCont;
