import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Logo from "./Logo";
import { HashRouter as Router } from "react-router-dom";
import "../../index.scss";

export default {
  title: "Logo",
  component: Logo,
  decorators: [withKnobs],
};

export const Default = () => (
  <Router>
    <Logo />
  </Router>
);
