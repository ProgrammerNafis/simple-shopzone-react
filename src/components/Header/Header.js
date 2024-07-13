import React from "react";
import logo from "../../logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" />
      </div>
        <nav>
          <a href="shop/">Shop</a>
          <a href="review/">Order</a>
          <a href="manage/">Manage</a>
        </nav>
    </div>
  );
};

export default Header;
