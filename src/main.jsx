// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
// import "bootstrap/scss/bootstrap.scss";
import "./styles/scss/themes.scss";
import "./styles/scss/style.scss";
import "./styles/css/materialdesignicons.min.css";
import "tiny-slider/dist/tiny-slider.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
