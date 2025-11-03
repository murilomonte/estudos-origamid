import React from "react";
import { NavLink } from "react-router";
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <NavLink to="/" end>
        Produtos
      </NavLink>
      <NavLink to="contato">Contato</NavLink>
    </nav>
  );
};

export default Header;
