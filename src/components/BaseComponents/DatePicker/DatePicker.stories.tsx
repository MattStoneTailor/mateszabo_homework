import * as React from "react";
import DatePicker from "./DatePicker";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { useState } from "react";
import "../../../index.scss";

export default {
  title: "DatePicker",
  component: DatePicker,
  decorators: [withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState(0);

  return (
    <DatePicker
      required={boolean("Required", true)}
      name={text("Name", "birthday")}
      label={text("Picker placeholder", "Pick your date")}
      onChange={(newValue) => setValue(newValue)}
      value={value}
    />
  );
};
