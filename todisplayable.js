function toDisplayableList(todos) {
    return todos
      .map(
        (todo) =>
          `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
            todo.dueDate === new Date().toISOString().split("T")[0] ? "" : todo.dueDate
          }`
      )
      .join("\n");
  }
  
  module.exports = {
    toDisplayableList,
    // other functions
  };
  