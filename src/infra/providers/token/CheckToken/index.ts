import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Providers } from '@provider/index';
import jwt from 'jsonwebtoken';

const checkToken = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    const id = request.params.id;
    if (!id) {
        throw new Error('Id inválido ');
    }

    const authToken = request.headers.authorization;
    if (!authToken) {
        throw new Error('Token is missing...');
    }

    const [, token] = authToken.split(' ');

    const secret = await Providers.Secret.GetSecret(id).then();

    if (!secret) {
        throw new Error('Secret inválido ');
    }

    const mySecret = secret;

    try {
        jwt.verify(token, mySecret);

        return next();
    } catch (error) {
        return response
            .status(StatusCodes.UNAUTHORIZED)
            .send(`Acesso negado ${error}`);
    }
};

export { checkToken };
