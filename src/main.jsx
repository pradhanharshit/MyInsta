import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Router from "./Router/Router.jsx";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
