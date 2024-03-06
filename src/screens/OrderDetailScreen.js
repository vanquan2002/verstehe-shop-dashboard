import React from "react";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import OrderDetailMain from "./../components/orders/OrderDetailMain";

const OrderDetailScreen = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        <Header />
        <OrderDetailMain />
      </div>
    </div>
  );
};

export default OrderDetailScreen;
