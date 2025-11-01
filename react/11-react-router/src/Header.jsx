import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou de rota')
  }, [location])

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
