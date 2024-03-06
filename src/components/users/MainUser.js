import React from "react";

const MainUser = () => {
  return (
    <div>
      <div className="flex">
        <p className="me-14">Customer</p>
        <button className="border-2 border-indigo-600 m-2 p-2">Create</button>
      </div>
      <div className="border-2 border-indigo-600 m-2 p-2">
        <div className="flex border-2 border-indigo-600 m-2 p-2 gap-24">
          <p>Search...</p>
          <div className="flex gap-5">
            <select>
              <option value="" key="">
                Show 20
              </option>
            </select>
            <select>
              <option value="" key="">
                Status all
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-9">
          <div className="border-2 border-indigo-600 m-2 p-2">
            <p>Admin</p>
            <p>Admin</p>
            <p>admin@gmail.com</p>
          </div>
          <div className="border-2 border-indigo-600 m-2 p-2">
            <p>User</p>
            <p>Customer</p>
            <p>user@gmail.com</p>
          </div>
        </div>
        <div>Previous 1 2 Next</div>
      </div>
    </div>
  );
};

export default MainUser;
