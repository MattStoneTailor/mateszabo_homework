import * as React from "react";
import styles from "./Menu.scss";
import { NavLink as ReactLink } from "react-router-dom";

const props = {
  activeClassName: styles.active,
};

const Menu = () => (
  <nav className={styles.menu}>
    <ReactLink {...props} exact to="/">
      Main
    </ReactLink>
    <ReactLink {...props} to="/profile">
      Profile
    </ReactLink>
  </nav>
);

export default Menu;
