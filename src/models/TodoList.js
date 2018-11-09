import { types } from "mobx-state-tree";
import Todo from "./Todo";

const TodoList = types
  .model("TodoList", {
    todos: types.array(Todo)
  })
  .actions(self => ({
    add(todo) {
      self.todos.push(todo);
    },
    remove(todo) {
      self.todos.splice(self.todos.indexOf(todo), 1);
    }
  }));

export default TodoList;
