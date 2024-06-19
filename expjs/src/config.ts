import dotenv from 'dotenv';
import { todoapp } from './run';
// dotenv.config({ path: `${__dirname}/config.env` });
dotenv.config();

type Config = {
    DB_USER: string,
    DB_PASSWORD: string,
    DB_URL: string,
    APP_PORT: number,
    DB_NAME: string
}

export const config:Config = {
    DB_USER: process.env.MONGODB_USER || 'user',
    DB_PASSWORD: process.env.MONGODB_PASSWORD || 'default-password',
    DB_URL: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/todo-expjs',
    APP_PORT: Number(process.env.APP_PORT) || 3000,
    DB_NAME: process.env.DB_NAME || 'tododb',
}