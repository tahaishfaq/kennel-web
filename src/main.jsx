import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AdoptionProvider } from "./context/AdoptionContext.jsx";

window.$BackEndURL = "https://primary.kennelboss.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdoptionProvider>
      <App />
    </AdoptionProvider>
  </React.StrictMode>
);
