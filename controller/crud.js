const db = require("../api/dbCrudOp");

exports.create = async (req, res) => {
  const todo = req.body.todo;
  //Storing in the database
  await db.storeDb(todo);
  //fetching from database and sending the data
  const listOfTodos = await db.fetchDb();
  console.log("listOfTodos ", listOfTodos);
  res.send(listOfTodos);
};

exports.read = async (req, res) => {
  //fetching from database and sending the data
  const listOfTodos = await db.fetchDb();
  console.log("listOfTodos ", listOfTodos);
  res.send(listOfTodos);
};

exports.update = async (req, res) => {
  const updatedTodo = req.body.todo;
  const id = req.body.id;
  //Storing in the database
  await db.updateDb(id, updatedTodo);
  //fetching from database and sending the data
  const listOfTodos = await db.fetchDb();
  console.log("listOfTodos ", listOfTodos);
  res.send(listOfTodos);
};

exports.delete = async(req, res) => {
  const id = req.body.id;
  //deleting in the database
  await db.deleteDb(id);
  //fetching from database and sending the data
  const listOfTodos = await db.fetchDb();
  console.log("listOfTodos ", listOfTodos);
  res.send(listOfTodos);
};
