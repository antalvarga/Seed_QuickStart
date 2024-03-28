import express, { Request, Response } from 'express';
import 'express-async-error';

const server = express();

server.use(express.json());

server.use((error: Error, request: Request, response: Response) => {
    return response.json({
        status: 'Error',
        message: error.message,
    });
});

export { server };
