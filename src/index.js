import React from "react";
import "./index.css";
import App from "./App";
import { render } from "react-dom"; // add this
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
