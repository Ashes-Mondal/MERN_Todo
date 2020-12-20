//Dependencies
const express = require("express");

//Files
const crud = require("../controller/crud");

const router = express.Router();

router.get("/", crud.read);
router.post("/", crud.create);
router.post("/delete", crud.delete);
router.post("/update", crud.update);

module.exports = router;
