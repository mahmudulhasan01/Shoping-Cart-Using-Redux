import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">
        <NavLink style={{ textDecoration: "none" }} className="navLink" to="/">
          Redux-Shop
        </NavLink>
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold" }}
          className="navLink"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold" }}
          className="navLink"
          to="cart"
        >
          Cart
        </NavLink>
        <span style={{ fontWeight: "bold" }} className="cartCount">
          Cart items: 0
        </span>
      </div>
    </div>
  );
};

export default Navbar;
