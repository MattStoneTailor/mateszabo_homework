import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Menu from "./Menu";
import { HashRouter as Router } from "react-router-dom";
import "../../index.scss";

export default {
  title: "Menu",
  component: Menu,
  decorators: [withKnobs],
};

export const Default = () => (
  <Router>
    <Menu />
  </Router>
);
