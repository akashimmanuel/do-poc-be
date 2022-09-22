const router = require("express").Router();

const {
  add,
  getTodos,
  deleteTodos,
} = require("../controllers/todo.controllers");

router.post("/add", add);
router.get("/get", getTodos);
router.post("/delete", deleteTodos);

module.exports = router;
