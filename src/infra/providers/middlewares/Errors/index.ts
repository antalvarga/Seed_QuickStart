import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';
import { Email } from '../../../../services/Email';
import { ApiError } from '../../apis/Error';

const Error = (
    error: Error & ApiError,
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    console.log(`Error :: ${error} `);

    const envio = error.enviaEmail ? Email(error.message) : '';

    console.log(envio);
    console.log(request);

    return response.send(next).status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
        enviaEmail: error.enviaEmail,
    });
};

export { Error };
