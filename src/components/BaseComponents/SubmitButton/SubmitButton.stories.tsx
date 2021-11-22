import * as React from "react";
import SubmitButton from "./SubmitButton";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import "../../../index.scss";

export default {
  title: "SubmitButton",
  component: SubmitButton,
  decorators: [withKnobs],
};

export const Default = () => (
  <SubmitButton
    onClick={() => console.log("clicked")}
    disabled={boolean("Disabled", false)}
  />
);
