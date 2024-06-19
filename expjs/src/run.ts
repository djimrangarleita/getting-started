import mongoose from "mongoose";
import { config } from "./config";
import express, {Express} from 'express';
import { Todo } from "./todo/todo.model";

export const todoapp:Express = express();

export const init = () => mongoose.connect(config.DB_URL, {dbName: config.DB_NAME}).then(() => {
    console.log('Connected to db...');
    todoapp.listen(config.APP_PORT, () => {
        console.log(`Server listening on port ${config.APP_PORT}`);
    });
}).catch((e: Error) => {
    console.log(`An error occured during initialisation ${e.message}`);
    throw e;
});
