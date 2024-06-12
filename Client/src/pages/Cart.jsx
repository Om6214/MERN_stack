import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const prodIds = JSON.parse(localStorage.getItem("ID")) || [];

  const fetchProd = async () => {
    try {
      const fetchedProducts = await Promise.all(
        prodIds.map(async (curId) => {
          const response = await fetch(`http://localhost:3000/cart/${curId}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch product with ID: ${curId}`);
          }
          return response.json();
        })
      );

      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProd = (id) => {
    const newProdIds = prodIds.filter((elem) => elem !== id);
    localStorage.setItem("ID", JSON.stringify(newProdIds));
    setProducts(products.filter((product) => product.data._id !== id));
  };

  useEffect(() => {
    fetchProd();
  }, []);

  return (
    <>
    <h1 style={{textAlign:"center"}}>User Cart</h1>
      {products.map((curEle, index) => (
        <div className="cart-item" key={index}>
          <div className="product-image">
            <img src={curEle.data.prodImg[0]} alt="Product Image" />
          </div>
          <div className="product-details">
            <div className="product-title">{curEle.data.prodName}</div>
            <div className="product-pricing">
              <span className="original-price">&#x20b9;{curEle.data.prodPrice}</span>
              <span className="discounted-price">&#x20b9;{curEle.data.discountPrice}</span>
            </div>
            <div className="product-actions">
              <div className="quantity-control">
                <button className="quantity-decrease">-</button>
                <span className="quantity">1</span>
                <button className="quantity-increase">+</button>
              </div>
              <button className="save-for-later">SAVE FOR LATER</button>
              <button onClick={() => deleteProd(curEle.data._id)} className="remove">REMOVE</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
