import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";

import reduxStore from "./util/reduxStore.js";

import App from "./app.js";

const store = reduxStore();

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
