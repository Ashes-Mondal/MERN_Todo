import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Props = createContext();
const App = () => {
  const [Arr, setArr] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const fetchData = async () => {
      const listOfTodos = await (await fetch("/")).json();
      console.log("listOfTodos: ", listOfTodos);
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
    const data = await (await fetch("/delete", requestOptions)).json();
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
    const data = await (await fetch("/update", requestOptions)).json();
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
    const data = await (await fetch("/", requestOptions)).json();
    console.log(data);
    setArr(data);
  };

  const value = {
    Arr:Arr,
    handleDelete:handleDelete,
    handleRewrite:handleRewrite,
    handleSubmit:handleSubmit
  }

  return (
    <Props.Provider value={value}>
      <div className="main-div">
        <div>
          <header>
            <h1 className="main-heading-text">ToDO App</h1>
            <TodoForm className="Todo-form" />
            {/*handleSubmit={handleSubmit}} */}
          </header>
          <main>
            <Todolist className="Todo-list" />
            {/* {Arr={Arr}
            handleDelete={handleDelete}
            handleRewrite={handleRewrite} */}
          </main>
        </div>
      </div>
    </Props.Provider>
  );
};

export default App;
export { Props };
