import * as React from "react";
import styles from "./Field.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export interface FieldType {
  onChange: (ev) => void;
  name?: string;
  type?: string;
  value: string;
  accessKey?: string;
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
  onBlur?: () => void;
  onValidation?: (error) => void;
  error?: string;
  icon?: object;
}

export const Field = ({
  name,
  type = "type",
  onChange,
  value,
  onBlur,
  error,
  required,
  icon,
  ...props
}: FieldType) => {
  return (
    <article className={styles.container}>
      <label
        className={`${styles.label} ${required ? styles.required : ""} ${
          error ? styles.error : ""
        }`}
        htmlFor={name}
      >
        {icon}
        <input
          {...props}
          type={type}
          value={value}
          name={name}
          onChange={(ev) => onChange(ev.target.value)}
          className={styles.field}
          onBlur={onBlur}
        />
      </label>
      {error && <ErrorMessage floating>{error}</ErrorMessage>}
    </article>
  );
};
