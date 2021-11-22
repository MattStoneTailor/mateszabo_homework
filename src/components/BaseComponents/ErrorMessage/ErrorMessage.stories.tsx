import * as React from "react";
import ErrorMessage from "./ErrorMessage";
import { withKnobs, text } from "@storybook/addon-knobs";
import "../../../index.scss";

export default {
  title: "ErrorMessage",
  component: ErrorMessage,
  decorators: [withKnobs],
};

export const Default = () => (
  <ErrorMessage>{text("Error message", "Test error message")}</ErrorMessage>
);
