import React from "react";
import "./Header.css";
import { categories } from "../../helper/data";

export const Header = () => {
  return (
    <div>
      <h1 className="header-main">Product List</h1>
      <div className="btn-pro">
        {categories.map((item) => (
          <button>{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};
