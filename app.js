const express = require('express')
const { Todo } = require('./models')

const app = express();
app.use(express.json());

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.findAll(); 
        res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching todos.');
    }
});

module.exports = app;









app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCount = await Todo.destroy({ where: { id } }); // Sequelize method to delete a record
        res.status(200).json(deletedCount > 0); 
        
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the todo.');
    }
});
