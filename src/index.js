import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import { Provider } from "react-redux";
import reducers from "./reducers";
import "./main.css";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
