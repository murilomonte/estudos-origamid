import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <NavLink to="/" end>Home</NavLink> 
      <NavLink to="/sobre">Sobre</NavLink> 
      <NavLink to="/dasd">Nada</NavLink> 
      <NavLink to="/login">Login</NavLink> 
    </div>
  );
};

export default Header;
