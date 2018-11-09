import React, { Component } from "react";
import "./App.css";
import { inject, observer } from "mobx-react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

@inject("TodoStore")
@observer
class App extends Component {
  render() {
    const { TodoStore } = this.props;
    return (
      <div className="App">
        <h2>{TodoStore.total}</h2>
        <Input />
        <TodoList />
      </div>
    );
  }
}

export default App;
