import React from "react";
import Orders from "./Orders";

const OrderMain = () => {
  return (
    <div>
      <p>Orders</p>
      <div className="flex border-2 border-indigo-600 m-2 p-2 gap-24">
        <p>Search...</p>
        <div className="flex gap-5">
          <select>
            <option value="" key="">
              Status
            </option>
          </select>
          <select>
            <option value="" key="">
              Show 20
            </option>
          </select>
        </div>
      </div>
      <Orders />
    </div>
  );
};

export default OrderMain;
