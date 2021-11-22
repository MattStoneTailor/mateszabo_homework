import * as React from "react";
import { Field, FieldType } from "./Field";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import Icon from "../Icon/Icon";

const fieldValidation = ({ required, value }: FieldType): string => {
  let errorMessage = "";

  if (required && !value) {
    errorMessage = "Name field cannot be empty";
  }

  return errorMessage;
};

const FieldName = ({ onValidation, placeholder, ...props }: FieldType) => {
  const [error, setError] = useState<string>("");

  return (
    <Field
      {...props}
      placeholder={placeholder}
      type="name"
      error={error}
      icon={
        <Icon>
          <FiUser />
        </Icon>
      }
      onBlur={() => {
        const error = fieldValidation(props);

        setError(error);
        onValidation && onValidation(error);
      }}
    />
  );
};

export default FieldName;
