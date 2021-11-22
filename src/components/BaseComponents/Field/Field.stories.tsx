import * as React from "react";
import { Field } from "./Field";
import FieldEmail from "./FieldEmail";
import FieldName from "./FieldName";
import FieldPhone from "./FieldPhone";
import { withKnobs, text } from "@storybook/addon-knobs";
import { useState } from "react";
import "../../../index.scss";

export default {
  title: "Field",
  component: Field,
  decorators: [withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Field
      value={value}
      name={text("Field name", "name")}
      placeholder={text("Field placeholder", "Text placeholder")}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Email = () => {
  const [value, setValue] = useState("");

  return (
    <FieldEmail
      value={value}
      name={text("Email name", "Email")}
      placeholder={text("Email placeholder", "Your email placeholder")}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Phone = () => {
  const [value, setValue] = useState("");

  return (
    <FieldPhone
      value={value}
      name={text("Phone name", "Phone")}
      placeholder={text("Phone placeholder", "Your phone placeholder")}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Name = () => {
  const [value, setValue] = useState("");

  return (
    <FieldName
      value={value}
      name={text("Name", "Name")}
      placeholder={text("Name placeholder", "Your name placeholder")}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
