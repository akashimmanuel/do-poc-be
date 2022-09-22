const router = require("express").Router();

const { add } = require("../controllers/todo.controllers");

router.post("/add", add);

module.exports = router;
