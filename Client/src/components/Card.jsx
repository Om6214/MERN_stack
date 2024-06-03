// Card.js
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container-fluid">
      <div id="card">
        <img id="prod" src="/image.png" alt="" />
        <h3>iPhone 13 Pro</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, cum a
          sint est ipsa commodi repellat eaque praesentium atque veniam nisi
          excepturi!
        </p>
        <button className="buy-btn">Buy Now</button>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
