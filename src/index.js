import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

import { Provider } from "mobx-react";
import TodoStore from "./models/TodoStore";

// create store
const todostore = TodoStore.create();

// Provider allows to pass the store to component
const Root = (
  <Provider TodoStore={todostore}>
    <App />
  </Provider>
);

// Patch listener will be invoked whenever the model or any of its descendants is mutated
onPatch(todostore, patch => {
  console.log('PATCH', patch);
});
makeInspectable(todostore);

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
