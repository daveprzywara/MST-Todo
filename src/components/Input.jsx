import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class Input extends Component {
  render() {
    const { TodoStore } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          TodoStore.todoList.add({ name: this.nameInput.value });
          e.target.reset();
          this.nameInput.focus();
        }}
      >
        <input type="text" ref={input => (this.nameInput = input)} id="name" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Input;
