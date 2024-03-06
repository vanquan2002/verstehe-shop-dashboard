import React from "react";
import products from "./../../data/products";
import Product from "./Product";

const Main = () => {
  return (
    <div>
      <div className="flex border-2 border-indigo-600 m-2 p-2 gap-24">
        <p>PRODUCTS</p>
        <p>Create</p>
      </div>
      <div className="flex border-2 border-indigo-600 m-2 p-2 gap-24">
        <p>Search...</p>
        <div className="flex gap-5">
          <select>
            <option value="" key="">
              All categories
            </option>
          </select>
          <select>
            <option value="" key="">
              Latest added
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap border-2 border-indigo-600 m-2 p-2">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
      <div>Preve 1 2 3 Next</div>
    </div>
  );
};

export default Main;
