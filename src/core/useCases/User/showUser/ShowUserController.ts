import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ShowUserUseCase } from './ShowUserUseCase';
import { IMyResponseData } from '@interfaces/myResponse/IMyResponse';

const ShowUserController: RequestHandler = async (
    request: Request,
    response: Response,
) => {
    const id = request.params.id;

    if (!id) {
        throw new Error('Id inválido ');
    }

    const userShowed = await ShowUserUseCase(id);

    const myResponse: IMyResponseData = {
        status: userShowed ? StatusCodes.OK : StatusCodes.BAD_REQUEST,
        message: 'Usuário ' + (userShowed ? 'encontrado' : 'inválido'),
        value: id,
        ...userShowed,
    };

    return response.status(myResponse.status).json(myResponse);
};

export { ShowUserController };
