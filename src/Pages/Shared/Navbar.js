import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <span className="logo">
        <NavLink className="navLink" to="/">
          Redux-Shop
        </NavLink>
      </span>
      <div className="nav_destination">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="cart">
          Cart
        </NavLink>
        <span
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
          className="cartCount navLink"
        >
          <BsCart4 className="cart_icon" /> {items.length}
        </span>
      </div>
    </div>
  );
};
export default Navbar;
