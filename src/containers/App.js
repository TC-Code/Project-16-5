import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import { hot } from "react-hot-loader";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        },
        {
          id: 4,
          text: "do shopping"
        },
        {
          id: 5,
          text: "wash the car"
        }
      ]
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  removeFirstItem() {
    const arrayWithoutFirstItem = this.state.data.splice(1);
    this.setState({ data: arrayWithoutFirstItem });
  }

  removeLastItem() {
    const arrayWithoutLastItem = this.state.data.filter(
      (todo, index) => index !== this.state.data.length - 1
    );
    this.setState({ data: arrayWithoutLastItem });
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="ToDo" tasks={this.state.data.length} />
        <button
          className={style.BtnRemove}
          onClick={this.removeFirstItem.bind(this)}
        >
          Delete first from list
        </button>
        <TodoList data={this.state.data} remove={this.removeTodo.bind(this)} />
        <button
          className={style.BtnRemove}
          onClick={this.removeLastItem.bind(this)}
        >
          Delete last from list
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
