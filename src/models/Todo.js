import { types, getParent } from "mobx-state-tree";

const Todo = types
  .model("Todo", {
    name: types.string,
    isCompleted: ""
  })
  .actions(self => ({
    remove() {
      self.isCompleted !== "completed"
        ? alert("Todo must be completed before removal")
        : getParent(self, 2).remove(self);
    },
    triggerComplete() {
      self.isCompleted === "completed"
        ? (self.isCompleted = "")
        : (self.isCompleted = "completed");
    }
  }));

export default Todo;
