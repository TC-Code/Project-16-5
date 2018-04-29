import React from "react";
import style from "./css/Title.css";

const Title = props => {
  return (
    <div className={style.Title}>
      <h1>{props.title}</h1>
      <h3>Tasks to do: {props.tasks}</h3>
    </div>
  );
};

export default Title;
