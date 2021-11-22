import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Link from "./Link";
import "../../../index.scss";

export default {
  title: "Link",
  component: Link,
  decorators: [withKnobs],
};

const label = "Link text";
const value = "Navigation to somewhere";

const hrefLabel = "Link url";
const hrefValue = "http://findersen.com";

export const Default = () => (
  <Link href={text(hrefLabel, hrefValue)}>{text(label, value)}</Link>
);
