import TodoItem from '../models/todoItem.js'

export const getTodos = async (req, res) => {
    try {
        const todoItems = await TodoItem.find();
        console.log(todoItems);
        res.status(200).json(todoItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new TodoItem(todo);
    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};