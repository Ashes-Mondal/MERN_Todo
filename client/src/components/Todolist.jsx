import React from "react";
import Todo from "./Todo";

function Todolist(props) {

  return (
    <>
      {props.Arr.map((todo_object) => {
        return (
          <Todo
            key={todo_object._id}
            id={todo_object._id}
            content={todo_object.todo}
            handleDelete={props.handleDelete}
            handleRewrite={props.handleRewrite}
          />
        );
      })}
    </>
  );
}

export default Todolist;
