import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IMyResponse } from '@interfaces/myResponse/IMyResponse';
import { RemoveUserUseCase } from './RemoveUserUseCase';

const RemoveUserController: RequestHandler = async (
    request: Request,
    response: Response,
) => {
    const id = request.params.id;

    if (!id) {
        throw new Error('Id inválido ');
    }

    let myResponse: IMyResponse;

    const userRemoved = await RemoveUserUseCase(id);

    if (!userRemoved) {
        myResponse = {
            status: StatusCodes.BAD_REQUEST,
            message: ' Usuário não econtrado ',
        };
    } else {
        myResponse = {
            status: StatusCodes.OK,
            message: `Usuário removido`,
            value: id,
        };
    }

    return response.status(myResponse.status).json(myResponse);
};

export { RemoveUserController };
