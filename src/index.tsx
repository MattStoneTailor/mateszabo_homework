import * as React from "react";
import { render } from "react-dom";
import Start from "./entry";
import "./index.scss";

const rootEl = document.getElementById("root");

render(<Start />, rootEl);
