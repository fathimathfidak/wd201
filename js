class Todo {
  constructor(id, title, dueDate, completed = false) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  setCompletionStatus(status) {
    this.completed = status;
  }
}
const express = require('express');
const router = express.Router();
const todos = []; // Example in-memory storage



router.post('/todos', validateTodo, (req, res) => {
  const { title, dueDate } = req.body;
  const newTodo = new Todo(todos.length + 1, title, dueDate);
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (!todo) return res.status(404).json({ error: 'To-do not found.' });

  todo.setCompletionStatus(completed);
  res.json(todo);
});


router.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: 'To-do not found.' });

  todos.splice(index, 1);
  res.status(204).send();
});
