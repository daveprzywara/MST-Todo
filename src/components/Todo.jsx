import React from "react";
import { observer } from "mobx-react";

const Todo = ({ todo }) => (
  <li className={todo.isCompleted}>
    <i onClick={todo.triggerComplete}>{todo.name}</i>
    <button className="x" onClick={todo.remove}>
      X
    </button>
  </li>
);

export default observer(Todo);
