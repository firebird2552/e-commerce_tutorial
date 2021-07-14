import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site_header">
      <h1>Fordorth Web Dsign</h1>
      <nav className="site_nav">
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
};
