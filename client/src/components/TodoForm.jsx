import React, { useState,useContext } from "react";
import {Props} from "../App"

function TodoForm(props) {
  const [input, setInput] = useState("");
  const {handleSubmit} = useContext(Props);

  const handlesubmitcases = (e) => {
    e.preventDefault();
    if (e.target[0].value.length) {
      // props.handleSubmit(e.target[0].value);
      handleSubmit(e.target[0].value);
      setInput("");
    }
  };
  return (
    <div>
      <form className="input-group mb-2" onSubmit={handlesubmitcases}>
        <input
          type="text"
          placeholder="Add a ToDo"
          name="Todo_item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
        />
        <button className="btn btn-primary mb-3">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
