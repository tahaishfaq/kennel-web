import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AdoptionProvider } from "./context/AdoptionContext.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

window.$BackEndURL = "https://primary.kennelboss.app";

const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdoptionProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </AdoptionProvider>
  </React.StrictMode>
);
