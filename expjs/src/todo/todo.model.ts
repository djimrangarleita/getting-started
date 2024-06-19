import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    owner: String,
});

export const Todo = mongoose.model('Todo', todoSchema);

