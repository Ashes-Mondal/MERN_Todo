const mongoose = require("mongoose");

//Files
const Todo = require("../models/database");

exports.fetchDb = async () => {
    const fetchedData = await Todo.find({}).exec()
    console.log("fetchedData: ",fetchedData);
    return fetchedData;
}

exports.storeDb = (todoData) => {
    console.log("todoData: ", todoData);
    const aTodoItem = new Todo({ todo: todoData });

    aTodoItem.save((err) => {
        if (err) console.log(err);
        else console.log("stored sucessfully!");
    });
};
exports.updateDb = (id, updatedTodoData) => {
    Todo.updateOne({ _id: id }, { todo: updatedTodoData }, (err) => {
        if (err) console.log(err);
        else console.log("updation sucessfull!");
    });
};
exports.deleteDb = (id) => {
    Todo.deleteOne({ _id: id }, (err) => {
        if (err) console.log(err);
        else console.log("deletion sucessfull!");
    });
};
