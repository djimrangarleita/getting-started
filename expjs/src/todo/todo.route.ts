import { Router } from "express-serve-static-core";
import express from "express";
import { getTodos, getTodo, createTodo, deleteTodo, updateTodo } from "./todo.controller";

export const todosRouter: Router = express.Router();

todosRouter.get('/', getTodos);

todosRouter.get('/:id', getTodo);

todosRouter.post('/', createTodo);

todosRouter.patch('/:id', updateTodo);

todosRouter.delete('/:id', deleteTodo);