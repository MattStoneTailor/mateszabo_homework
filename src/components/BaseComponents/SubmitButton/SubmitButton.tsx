import * as React from "react";
import styles from "./SubmitButton.scss";

interface SubmitButtonType {
  onClick: () => void;
  disabled?: boolean;
}
const SubmitButton = ({ disabled, onClick }: SubmitButtonType) => (
  <input
    disabled={disabled}
    type="submit"
    accessKey="s"
    className={styles.submitButton}
    onClick={onClick}
    value="Save"
  />
);

export default SubmitButton;
