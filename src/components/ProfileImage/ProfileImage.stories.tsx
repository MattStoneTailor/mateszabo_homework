import * as React from "react";
import ProfileImage from "./ProfileImage";
import { withKnobs, text } from "@storybook/addon-knobs";
import { HashRouter as Router } from "react-router-dom";
import "../../index.scss";

export default {
  title: "ProfileImageType",
  component: ProfileImage,
  decorators: [withKnobs],
};

export const Default = () => (
  <Router>
    <ProfileImage
      src={{
        small: text(
          "Small image url",
          "http://mateszabo.epizy.com/images/choosens/3.jpg",
        ),
        large: text(
          "Large Image url",
          "http://mateszabo.epizy.com/images/choosens/3.jpg",
        ),
      }}
    />
  </Router>
);
