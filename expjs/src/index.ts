import express from 'express';
import { todosRouter } from './todo/todo.route';
import { init, todoapp } from './run';

init().then(() => {
    todoapp.use(express.json());
    todoapp.use('/api/todos', todosRouter);
}).catch((e: Error) => {
    console.log('Exiting app with code 1');
    process.exit(1);
});

