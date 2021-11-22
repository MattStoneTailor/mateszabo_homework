import * as React from "react";
import styles from "./Logo.scss";
import LogoSvg from "./Logo.svg";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <img alt="React logo" title="Go to Main" src={LogoSvg} />
  </Link>
);

export default Logo;
