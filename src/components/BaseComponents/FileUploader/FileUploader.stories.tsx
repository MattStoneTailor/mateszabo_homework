import * as React from "react";
import FileUploader from "./FileUploader";
import { withKnobs, text } from "@storybook/addon-knobs";
import { useState } from "react";
import "../../../index.scss";

export default {
  title: "FileUploader",
  component: FileUploader,
  decorators: [withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState({
    small: "http://mateszabo.epizy.com/images/choosens/3.jpg",
    large: "http://mateszabo.epizy.com/images/choosens/3.jpg",
  });

  return (
    <FileUploader
      avatar={value}
      label={text("File uploader placeholder", "Upload your image")}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
