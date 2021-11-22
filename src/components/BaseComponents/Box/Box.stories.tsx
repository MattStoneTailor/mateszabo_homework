import * as React from "react";
import Box from "./Box";
import { withKnobs, text } from "@storybook/addon-knobs";
import "../../../index.scss";

export default {
  title: "Box",
  component: Box,
  decorators: [withKnobs],
};

export const Default = () => (
  <Box>{text("Box content", "Lorem ipsum dolor sit amet")}</Box>
);
