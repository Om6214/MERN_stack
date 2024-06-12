import { useAuth } from "../storage/auth";
import "./Service.css";
import "../components/Card.css";
import { NavLink, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Service = () => {
  const { data } = useAuth();
  
  // to get the id from loacal storage
  const getIdLocal = ()=>{
    const Id_list = localStorage.getItem("ID")
    if(Id_list){
      return JSON.parse(Id_list)
    }
    else{
      return []
    }
  }

  const [id, setid] = useState(getIdLocal())

  

  const handleCart = (Id)=>{
    setid((prevId)=>[...prevId,Id])
  }

  useEffect(()=>{
    localStorage.setItem("ID", JSON.stringify(id))
  },[id])

  return (
    <div>
      <div id="cont">
        <div className="service">
          <div className="Top">
          <h1 id="header">Our products</h1>
          <NavLink to="/cart">View Cart </NavLink>
          </div>
          <div style={{height:"auto"}} className="container-fluid">
            {data.length > 0 ? (
              data.map((currEle, index) => {
                const { prodName, prodPrice, Description, prodImg ,prodStocks, discountPrice } = currEle;
                return (
                  <div id="card" key={index}>
                    <img id="prod" src={prodImg[0]} alt={prodName} />
                    <h3>{prodName}</h3>
                    <p>{Description}</p>
                    <h4><del>&#x20b9; {prodPrice}</del><ins style={{marginLeft:"10px"}}>&#x20b9; {discountPrice}</ins></h4>
                    <h6>Only {prodStocks} left</h6>
                    <button className="buy-btn">Buy Now</button>
                    <NavLink onClick={()=>handleCart(currEle._id)} style={{fontWeight:"700"}} className="add-to-cart-btn">Add to Cart</NavLink>
                  </div>
                );
              })
            ) : (
              <p>loading data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
