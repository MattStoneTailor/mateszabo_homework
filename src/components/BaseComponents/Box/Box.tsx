import * as React from "react";
import styles from "./Box.scss";

interface BoxType {
  children: React.ReactNode;
  className?: string;
}
const Box = ({ className, children }: BoxType) => {
  const concatenatedClassName = styles.box + (className ? " " + className : "");

  return <section className={concatenatedClassName}>{children}</section>;
};

export default Box;
