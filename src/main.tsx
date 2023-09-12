import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./scss/base.scss";

import data from "./data/public.en";
// import data from "data/professional.fr";
// import data from "data/professional.en";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);
