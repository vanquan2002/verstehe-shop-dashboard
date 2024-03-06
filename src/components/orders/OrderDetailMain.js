import React from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";

const OrderDetailMain = () => {
  return (
    <div>
      <button className="border-2 border-indigo-600 m-2 p-2">
        BACK TO ORDERS
      </button>
      <div className="border-2 border-indigo-600 m-2 p-2">
        <div className="flex justify-between border-2 border-indigo-600 m-2 p-2">
          <div>
            <p>Dec 12 2023</p>
            <p>Order ID: 22124893jgr545</p>
          </div>
          <div>
            <select>
              <option value="" key="">
                Change status
              </option>
            </select>
            <button className="border-2 border-indigo-600 m-2 p-2">Save</button>
          </div>
        </div>
        <OrderDetailInfo />
        <div className="flex">
          <OrderDetailProducts />
          <button className="border-2 h-10 border-indigo-600 m-2 p-2">
            MARK AS DELIVERED
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailMain;
