import * as React from "react";
import { Field, FieldType } from "./Field";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { AiOutlineMail } from "react-icons/ai";
import Icon from "../Icon/Icon";

const fieldValidation = ({ required, value }: FieldType): string => {
  let errorMessage = "";

  if (required && !value) {
    errorMessage = "Email field cannot be empty";
  } else if (!isEmail(value)) {
    errorMessage = "Not a valid email address";
  }

  return errorMessage;
};

const FieldEmail = ({ onValidation, ...props }: FieldType) => {
  const [error, setError] = useState<string>("");

  return (
    <Field
      {...props}
      accessKey="e"
      placeholder="Your email address"
      type="email"
      name="email"
      error={error}
      icon={
        <Icon>
          <AiOutlineMail />
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

export default FieldEmail;
