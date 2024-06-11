import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import "./Card.css"

function AutoLayoutExample() {
  const [category, setcategory] = useState("all");
  const [data, setdata] = useState([]);

  const fetchprodByCat = async () => {
    try {
      const response = await fetch(
        `https://mern-stack-4ckn.onrender.com/products/${category}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const res = await response.json();
        setdata(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchprodByCat();
  }, [category]);

  return (
    <>
      <Container
        id="info"
        className="d-flex justify-content-center"
        style={{ width: "95%", marginTop: "50px" }}
      >
        <h1>Shop By Category</h1>
        <Row style={{ width: "95%" }}>
          <div className="card">
            <img
              onClick={() => {
                setcategory("Laptop");
              }}
              src="/laptop.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              style={{ borderRadius: "50px" }}
              onClick={() => {
                setcategory("Phone");
              }}
              src="/phone.jpeg"
              alt=""
            />
          </div>
          <div className="card">
            <img
              onClick={() => {
                setcategory("Accessories");
              }}
              src="/Accessories.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              style={{borderRadius:"30px"}}
              onClick={() => {
                setcategory("Watches");
              }}
              src="/watches.jpeg"
              alt=""
            />
          </div>
          <div className="card">
            <img
              onClick={() => {
                setcategory("Camera");
              }}
              src="/Cameras.png"
              alt="cam"
            />
          </div>
          <div className="card">
            <img
              onClick={() => {
                setcategory("TV");
              }}
              style={{ borderRadius: "40px" }}
              src="/TV.jpg"
              alt=""
            />
          </div>
        </Row>
      </Container>

      <div className="container-fluid">
        {data.map((currEle, index) => {
          const{prodName,prodPrice,Description,prodImg}= currEle;
          return (
            <div id="card" key={index}>
              <img id="prod" src={prodImg[0]} alt="" />
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
}

export default AutoLayoutExample;
