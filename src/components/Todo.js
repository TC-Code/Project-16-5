import React from "react";
import style from "./css/Todo.css";
class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={style.Todo}>
        <button className={style.BtnDeleteItem} onClick={event => this.handleClick()}>&#10006;</button>
        {this.props.todo}
      </li>
    );
  }

  handleClick(event) {
    this.props.remove(this.props.id);
  }
}

export default Todo;
