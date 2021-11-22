import * as React from "react";
import styles from "./Header.scss";
import Menu from "./../Menu/Menu";
import Logo from "./../Logo/Logo";

const Header = () => (
  <header className={styles.header}>
    <section>
      <Logo />
      <Menu />
    </section>
  </header>
);

export default Header;
