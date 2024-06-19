import mongoose, { ObjectId } from "mongoose";
import { Todo } from "./todo.model";

export default class TodoService {
    async getTodos() {
        return await Todo.find();
    }

    async getTodo(todoId: string): Promise<mongoose.Document<ObjectId, any, typeof Todo>|null> {
        return await Todo.findById(todoId);
    }

    async createTodo(todo: {title:string, completed: boolean}) {
        const mappedTodo = new Todo({title: todo.title, completed: todo.completed});
        return await mappedTodo.save();
    }

    async updateTodo(todoId: string) {
        return {msg: 'Updated successfuly'}
    }

    deleteTodo(todoId: string) {
        return {msg: 'Deleted successfuly'}
    }
}