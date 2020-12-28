import React, { useState ,useContext} from "react";
import {Props} from '../App'

const Todo = (props) => {
  const [Rewriteflag, setRewriteflag] = useState(false);
  const {handleDelete,handleRewrite} = useContext(Props);

  const handleRewritecases = (e) => {
    e.preventDefault();
    // props.handleRewrite(props.id, e.target[0].value);
    handleRewrite(props.id, e.target[0].value);
    setRewriteflag(false);
  };

  const RW = (pr) => {
    const [input, setInput] = useState(props.content);
    return (
      <div className="Todo-item">
        <form className="input-group mb-1" onSubmit={handleRewritecases}>
          <input
            className="form-control"
            type="text"
            name="Rewrite_Todo_item"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (e.target.value === "") handleDelete(props.id)
              // props.handleDelete(props.id);
            }}
          />
          <button className=" btn btn-outline-warning">Update</button>
        </form>
      </div>
    );
  };

  const Actual = () => {
    return (
      <>
        <div className="Todo-item">
          <span
            className="Todo-style"
          >
            {props.content}
          </span>
          <button
            className="Dbutton-pos btn btn-outline-danger"
            onClick={() => {
              handleDelete(props.id)
              // props.handleDelete(props.id);
            }}
          >
            Delete
          </button>
          <button
            className="Ubutton-pos btn btn-outline-warning"
            onClick={() => {
              setRewriteflag(true);
            }}
          >
            Rewrite
          </button>
        </div>
      </>
    );
  };

  if (Rewriteflag) return <RW />;
  return <Actual />;
};
export default Todo;
