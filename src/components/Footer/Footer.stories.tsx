import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Footer from "./Footer";
import "../../index.scss";

export default {
  title: "Footer",
  component: Footer,
  decorators: [withKnobs],
};

export const Default = () => <Footer />;
