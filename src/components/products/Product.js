import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="w-1/4 border-2 border-indigo-600 p-2">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <div className="flex">
        <p
          onClick={() => navigate("/editproduct")}
          className="border-2 border-indigo-600 m-2 p-2"
        >
          edit
        </p>
        <p className="border-2 border-indigo-600 m-2 p-2">delete</p>
      </div>
    </div>
  );
};

export default Product;
