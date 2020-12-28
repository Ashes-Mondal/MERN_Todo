import React,{useContext} from "react";
import Todo from "./Todo";
import {Props} from '../App'

function Todolist() {
  const {handleDelete,handleRewrite,Arr} = useContext(Props)
  return (
    <>
    {/* props. */}
      {Arr.map((todo_object) => {
        return (
          <Todo
            key={todo_object._id}
            id={todo_object._id}
            content={todo_object.todo}
            handleDelete={handleDelete}
            handleRewrite={handleRewrite}
          />
          // handleDelete={props.handleDelete}
          //   handleRewrite={props.handleRewrite}
        );
      })}
    </>
  );
}

export default Todolist;
