import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [Arr, setArr] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const fetchData = async () => {
      const listOfTodos = await ((await fetch("http://localhost:8000")).json());
      console.log("listOfTodos: ",listOfTodos);
      setArr(listOfTodos);
    };
    //fetching data from the server
    fetchData();
  }, []); 

  const handleDelete = async (id) => {
    //POST request option
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    };
    //deleting on the server side and changing the state
    const data = await((await fetch("http://localhost:8000/delete", requestOptions)).json());
    console.log(data);
    setArr(data);
  };

  const handleRewrite = async (id, changedInput) => {
    //POST request option
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: changedInput, id: id }),
    };
    //updating on the server side and changing the state
    const data = await ((await fetch("http://localhost:8000/update", requestOptions)).json());
    console.log(data);
    setArr(data);
  };

  const handleSubmit = async (e) => {
    //POST request option
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: e }),
    };
    //submitting on server side and changing the state
    const data = await((await fetch("http://localhost:8000", requestOptions)).json());
    console.log(data);
    setArr(data);

  };

  return (
    <div className="main-div">
      <div>
        <header>
          <h1 className="main-heading-text">ToDO App</h1>
          <TodoForm className="Todo-form" handleSubmit={handleSubmit} />
        </header>
        <main>
          <Todolist
            Arr={Arr}
            handleDelete={handleDelete}
            handleRewrite={handleRewrite}
            className="Todo-list"
          />
        </main>
      </div>
    </div>
  );
};

export default App;
