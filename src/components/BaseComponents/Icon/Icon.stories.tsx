import * as React from "react";
import Icon from "./Icon";
import { withKnobs } from "@storybook/addon-knobs";
import "../../../index.scss";
import { FaBirthdayCake } from "react-icons/fa";

export default {
  title: "Icon",
  component: Icon,
  decorators: [withKnobs],
};

export const Default = () => (
  <Icon>
    <FaBirthdayCake />
  </Icon>
);
