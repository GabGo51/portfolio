import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import App from "./App";
import MouseContextProvider from "./context/mouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <GlobalStyles/>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
);
