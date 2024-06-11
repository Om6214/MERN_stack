import { useAuth } from "../storage/auth";
import "./Service.css";
import "../components/Card.css";

const Service = () => {
  const { data } = useAuth();

  return (
    <div>
      <div id="cont">
        <div className="service">
          <h1 id="header">Our products</h1>
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
                    <button className="add-to-cart-btn">Add to Cart</button>
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
