import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Todo from "./Todo";

@inject("TodoStore")
@observer
class TodoList extends Component {
  render() {
    const { TodoStore } = this.props;
    return (
        <ul>
          {TodoStore.todoList.todos.map((todo, index) => (
            <Todo key={index} todo={todo}>
              {todo}
            </Todo>
          ))}
        </ul>
    );
  }
}

export default TodoList;
