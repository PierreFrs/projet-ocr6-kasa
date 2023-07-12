import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.scss";
import "./style/colors.scss";
import "./style/typo.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
