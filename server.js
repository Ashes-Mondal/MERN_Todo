//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//Files
const routes = require("./routes/routes");

//PORT
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Database
const dbURL = "mongodb://localhost:27017/tododb"
mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology: true } );

//Routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
