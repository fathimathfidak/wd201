app.get('/', (req, res) => {
    const todos = [
        { task: "Learn Node.js", completed: false },
        { task: "Build a Todo App", completed: true }
    ];
    res.render('index', { todos });
});
