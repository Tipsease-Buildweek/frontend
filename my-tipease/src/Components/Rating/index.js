import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import Feedback from "../Rating/Feedback";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Feedback</h2>
      <Feedback onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
