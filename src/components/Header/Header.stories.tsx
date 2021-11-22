import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Header";
import "../../index.scss";

export default {
  title: "Header",
  component: Header,
  decorators: [withKnobs],
};

export const Default = () => (
  <Router>
    <Header />
  </Router>
);
