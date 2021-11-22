import * as React from "react";
import TextBox from "./TextBox";
import { withKnobs, text } from "@storybook/addon-knobs";
import { useState } from "react";
import "../../../index.scss";

export default {
  title: "TextBox",
  component: TextBox,
  decorators: [withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <TextBox
      value={value}
      name={text("Field name", "name")}
      placeholder={text("Field placeholder", "Text placeholder")}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
