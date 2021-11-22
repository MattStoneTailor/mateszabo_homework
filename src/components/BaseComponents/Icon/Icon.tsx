import * as React from "react";
import styles from "./Icon.scss";

interface IconType {
  children: React.ReactNode;
}
const Icon = ({ children }: IconType) => (
  <span className={styles.icon}>{children}</span>
);

export default Icon;
