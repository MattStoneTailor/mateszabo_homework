import * as React from "react";
import { Field, FieldType } from "./Field";
import isMobilePhone from "validator/lib/isMobilePhone";
import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import Icon from "../Icon/Icon";

const fieldValidation = ({ required, value }: FieldType): string => {
  let errorMessage = "";

  if (required && !value) {
    errorMessage = "Phone field cannot be empty";
  } else if (!isMobilePhone(value)) {
    errorMessage = "Not a valid phone number";
  }

  return errorMessage;
};

const FieldPhone = ({ onValidation, ...props }: FieldType) => {
  const [error, setError] = useState<string>("");

  return (
    <Field
      {...props}
      accessKey="p"
      placeholder="Your telephone number"
      type="tel"
      name="phone"
      icon={
        <Icon>
          <AiOutlinePhone />
        </Icon>
      }
      error={error}
      onBlur={() => {
        const error = fieldValidation(props);

        setError(error);
        onValidation && onValidation(error);
      }}
    />
  );
};

export default FieldPhone;
