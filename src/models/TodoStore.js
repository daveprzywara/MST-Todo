import { types } from "mobx-state-tree";
import TodoList from "./TodoList";

const TodoStore = types
  .model("TodoStore", {
    todoList: types.optional(TodoList, { todos: [] })
  })
  .views(self => ({
    get total() {
      return "Todos: " + this.todoList.todos.length;
    }
  }));

export default TodoStore;
