import React from "react";
import TopTotal from "./TopTotal";
import ProductsStatistics from "./ProductsStatistics";
import SaleStatistics from "./SaleStatistics";
import LatestOrder from "./LatestOrder";

const Main = () => {
  return (
    <div>
      <p>Dashboard</p>
      <TopTotal />
      <div className="flex">
        <SaleStatistics />
        <ProductsStatistics />
      </div>
      <LatestOrder />
    </div>
  );
};

export default Main;
