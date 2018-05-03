import React from "react";
import style from "./css/TodoList.css";
import Todo from "./Todo";

const TodoList = props => {
  const itemsToDo = props.data.map(item => (
    <Todo key={item.id} id={item.id} todo={item.text} remove={props.remove} />
  ));
  return <ul className={style.TodoList}>{itemsToDo}</ul>;
};

export default TodoList;
