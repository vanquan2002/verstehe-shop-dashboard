import React from "react";

const TopTotal = () => {
  return (
    <div className="flex">
      <div className="w-40 border-2 border-indigo-600 m-2 p-2">
        <p>Total sales</p>
        <p>$22.678</p>
      </div>
      <div className="w-40 border-2 border-indigo-600 m-2 p-2">
        <p>Total Orders</p>
        <p>120</p>
      </div>
      <div className="w-40 border-2 border-indigo-600 m-2 p-2">
        <p>Total Products</p>
        <p>70</p>
      </div>
    </div>
  );
};

export default TopTotal;
