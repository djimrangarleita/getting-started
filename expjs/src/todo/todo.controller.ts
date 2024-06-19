import { Request, Response } from "express-serve-static-core";
import TodoService  from "./todo.service";

export const getTodos = async (req: Request, res: Response) => {
    const todoService = new TodoService();
    const todos = await todoService.getTodos();
    console.log(todos);
    return res.status(200).send(todos);
}

export const getTodo = (req: Request, res: Response) => {
    return res.status(200).send({msg: req.params.id});
}

export const createTodo = (req: Request, res: Response) => {
    return res.status(201).send({msg: req.body});
}

export const updateTodo = (req: Request, res: Response) => {
    return res.status(200).send({msg: req.body});
}

export const deleteTodo = (req: Request, res: Response) => {
    return res.status(204).send();
}