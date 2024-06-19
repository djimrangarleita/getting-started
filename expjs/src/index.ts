import express, {Express} from 'express';
import {Request, Response} from 'express-serve-static-core';

type ReqBody = {name: string, age: number};

const app: Express = express();

app.use(express.json());

app.get('/', (request: Request<any, any, ReqBody>, response: Response<{msg: string}>) => {
    console.log(`Your name is ${request.body.name} and you are ${request.body.age}`);

    response.send({msg: 'Lafia lessi karé karé mbak ray'});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
