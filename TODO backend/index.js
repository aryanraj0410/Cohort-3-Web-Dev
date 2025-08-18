const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

const FILE_PATH = 'todos.json';

// Helper to load todos safely
function loadTodos() {
    try {
        if (!fs.existsSync(FILE_PATH)) {
            fs.writeFileSync(FILE_PATH, JSON.stringify([]));
        }
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
}

// Helper to save todos
function saveTodos(todos) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// Create
app.post('/todos', (req, res) => {
    let todos = loadTodos();
    const { title } = req.body;
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
});

// Read all
app.get('/todos', (req, res) => {
    res.json(loadTodos());
});

// Read single
app.get('/todos/:id', (req, res) => {
    let todos = loadTodos();
    const todo = todos.find(t => t.id == req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
});

// Update
app.put('/todos/:id', (req, res) => {
    let todos = loadTodos();
    const todo = todos.find(t => t.id == req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    const { title, completed } = req.body;
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;
    saveTodos(todos);
    res.json(todo);
});

// Delete
app.delete('/todos/:id', (req, res) => {
    let todos = loadTodos();
    const index = todos.findIndex(t => t.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Todo not found" });
    const deletedTodo = todos.splice(index, 1);
    saveTodos(todos);
    res.json(deletedTodo[0]);
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
    