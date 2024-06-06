// Card.js
import React from "react";
import "./Card.css";
import { useAuth } from "../storage/auth";

const Card = () => {
  const { data } = useAuth();
  return (
    <>
      <div className="container-fluid">
        {data.map((currEle, index) => {
          const{prodName,prodPrice,Description,prodImg}= currEle;
          return (
            <div id="card">
              <img id="prod" src={prodImg} alt="" />
              <h3>{prodName}</h3>
              <p>
                {Description}
              </p>
              <h4>$ {prodPrice}</h4>
              <button className="buy-btn">Buy Now</button>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
