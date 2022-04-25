import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./redux/reducer";

const store = createStore(reducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
