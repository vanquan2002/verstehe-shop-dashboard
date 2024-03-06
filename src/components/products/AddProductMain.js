import React from "react";

const AddProductMain = () => {
  return (
    <div>
      <div className="flex gap-36">
        <p className="border-2 border-indigo-600 m-2 p-2">Go to product</p>
        <p>Add product</p>
        <p className="border-2 border-indigo-600 m-2 p-2">Publish now</p>
      </div>
      <div className="border-2 border-indigo-600 m-2 p-2">
        <p>Product title:</p>
        <input
          className="border-2 border-indigo-600 m-2 p-2"
          type="text"
          placeholder="Type here"
        />
        <p>Price:</p>
        <input
          className="border-2 border-indigo-600 m-2 p-2"
          type="text"
          placeholder="Type here"
        />
        <p>Count In Stock:</p>
        <input
          className="border-2 border-indigo-600 m-2 p-2"
          type="text"
          placeholder="Type here"
        />
        <p>Description:</p>
        <input
          className="border-2 border-indigo-600 m-2 p-2"
          type="text"
          placeholder="Type here"
        />
        <p>Images:</p>
        <input
          className="border-2 border-indigo-600 m-2 p-2"
          type="text"
          placeholder="Type here"
        />
        <input className="border-2 border-indigo-600 m-2 p-2" type="file" />
      </div>
    </div>
  );
};

export default AddProductMain;
