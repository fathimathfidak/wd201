
development {
    username: "your_db_username",
    password: "your_db_password",
    database: "todo_db",
    host: "127.0.0.1",
    dialect: "sqlite".
  }
  static async overdue() {
    const today = new Date().toISOString().split("T")[0];
    return await Todo.findAll({
      where: {
        dueDate: { [Op.lt]: today },
        completed: false,
      },
      order: [["dueDate", "ASC"]],
    });
  }
  
  static async dueToday() {
    const today = new Date().toISOString().split("T")[0];
    return await Todo.findAll({
      where: {
        dueDate: today,
        completed: false,
      },
      order: [["id", "ASC"]],
    });
  }
  
  static async dueLater() {
    const today = new Date().toISOString().split("T")[0];
    return await Todo.findAll({
      where: {
        dueDate: { [Op.gt]: today },
        completed: false,
      },
      order: [["dueDate", "ASC"]],
    });
  }
  