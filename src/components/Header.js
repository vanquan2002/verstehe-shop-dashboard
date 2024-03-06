import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="flex items-center h-14 ps-10 bg-slate-200">
      <Input
        style={{
          width: 300,
          height: 40,
        }}
        placeholder="default size"
        prefix={<SearchOutlined />}
      />
      <div className="absolute top-0 right-0 bg-white w-30 border-2 border-indigo-600 m-2 p-2">
        <p>My profile</p>
        <p>Settings</p>
        <p>Exit</p>
      </div>
    </div>
  );
};

export default Header;
