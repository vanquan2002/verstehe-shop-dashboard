import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/products/EditProductMain";

const EditProductScreen = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        <Header />
        <EditProductMain />
      </div>
    </div>
  );
};

export default EditProductScreen;
