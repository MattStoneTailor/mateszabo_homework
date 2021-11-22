import * as React from "react";
import styles from "./ErrorMessage.scss";

interface ErrorMessageType {
  children: string;
  floating?: boolean;
}
const ErrorMessage = ({ children, floating }: ErrorMessageType) => (
  <strong
    className={`${styles.errorMessage} ${floating ? styles.floating : ""}`}
  >
    {children}
  </strong>
);

export default ErrorMessage;
