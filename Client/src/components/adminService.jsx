import React, { useState } from "react";
import "../App.css";
import { toast } from "react-toastify";

const adminService = () => {
  const token = localStorage.getItem("Token")
  const [product, setproduct] = useState({
    prodImg: "",
    prodName: "",
    prodCategory:"",
    prodPrice: "",
    discountPrice: "",
    prodStocks:"",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/admin/addprod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`

        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        toast.success("Product added", {
          theme: "dark",
        });
        setproduct({
          prodImg: [],
          prodName: "",
          prodCategory:"",
          prodPrice: "",
          prodStocks:"",
          discountPrice: "",
          Description: "",
        });
      } else
        toast.error("Authorization Revoked", {
          theme: "dark",
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="formdiv">
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Add Products</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="imglink" className="form-label">
              ImageLink
            </label>
            <input
              type="String"
              className="form-control"
              name="prodImg"
              id="prodImg"
              aria-describedby="emailHelp"
              value={product.prodImg}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ProdName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="prodName"
              name="prodName"
              value={product.prodName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prodCategory" className="form-label">
              prodCategory
            </label>
            <input
              type="text"
              className="form-control"
              id="prodCategory"
              name="prodCategory"
              value={product.prodCategory}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prodprice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="prodPrice"
              name="prodPrice"
              value={product.prodPrice}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="discountPrice" className="form-label">
              Product Discount Price
            </label>
            <input
              type="number"
              className="form-control"
              id="discountPrice"
              name="discountPrice"
              value={product.discountPrice}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prodStocks" className="form-label">
              product stocks
            </label>
            <input
              type="number"
              className="form-control"
              id="prodStocks"
              name="prodStocks"
              value={product.prodStocks}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Product Description
            </label>
            <input
              type="text"
              className="form-control"
              id="Description"
              name="Description"
              value={product.Description}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default adminService;
