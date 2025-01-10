import styles from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx"; //

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.Link, isActive && styles.active);
};

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Routing</h2>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/about">
          About
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
