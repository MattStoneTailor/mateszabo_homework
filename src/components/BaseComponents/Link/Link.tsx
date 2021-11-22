import * as React from "react";
import styles from "./Link.scss";

interface LinkType {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  title?: string;
}

const Link = ({ children, className, ...props }: LinkType) => {
  const concatenatedClassName =
    styles.link + (className ? " " + className : "");

  return (
    <a {...props} className={concatenatedClassName} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
