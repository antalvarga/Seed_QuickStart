import { StatusCodes } from 'http-status-codes';
import { Request, Response, RequestHandler } from 'express';
import { IMyResponseData } from '@interfaces/myResponse/IMyResponse';
import { CreateUserZodUseCase } from './CreateUserUseCase';
import { zodErrors } from '@core/helpers/zodErrors';
import { ZodError } from 'zod';

import {
    TypeUserZodSchema,
    UserZodSchema,
} from '@core/models/user/UserZodSchema';

const CreateUserZodController: RequestHandler = async (
    request: Request,
    response: Response,
) => {
    const dtoUserZod: TypeUserZodSchema = request.body as TypeUserZodSchema;

    try {
        UserZodSchema.parse(dtoUserZod);
    } catch (error) {
        const errors = error as ZodError;
        const listError = zodErrors.returnZodListErrors(errors);

        return response.status(StatusCodes.BAD_REQUEST).send(listError);
    }

    const userZodCreated = await CreateUserZodUseCase(dtoUserZod).then();

    const myResponse: IMyResponseData = {
        status: userZodCreated ? StatusCodes.OK : StatusCodes.BAD_REQUEST,
        message: 'Usuário ' + (userZodCreated ? 'criado' : 'inválido '),
        value: userZodCreated ? userZodCreated.id : '',
        ...userZodCreated,
    };

    return response.status(myResponse.status).send(myResponse);
};

export { CreateUserZodController };
