import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
    TypeUserZodSchema,
    UserZodSchema,
} from '@core/models/user/UserZodSchema';

import { IMyResponse } from '@interfaces/myResponse/IMyResponse';
import { UpdateUserUseCase } from './UpdateUserUseCase';

import { zodErrors } from '@core/helpers/zodErrors';
import { Providers } from '@provider/index';
import { ZodError } from 'zod';

const UpdateUserController: RequestHandler = async (
    request: Request,
    response: Response,
) => {
    console.log(`:: UpdateUserController ::`);

    const id: string = request.params.id;
    const dtoUserZodSchema: TypeUserZodSchema =
        request.body as TypeUserZodSchema;

    if (!id) {
        throw new Error('Id inválido ');
    }

    if (!dtoUserZodSchema.secret) {
        dtoUserZodSchema.secret = Providers.Secret.generateSecret();
    }

    try {
        dtoUserZodSchema.birth = new Date().toISOString();

        UserZodSchema.parse(dtoUserZodSchema);
    } catch (error) {
        const errors = error as ZodError;
        const listError = zodErrors.returnZodListErrors(errors);

        return response.status(StatusCodes.BAD_REQUEST).send(listError);
    }

    const userUpdated = await UpdateUserUseCase(id, dtoUserZodSchema);

    const myResponse: IMyResponse = {
        status: userUpdated ? StatusCodes.OK : StatusCodes.BAD_REQUEST,
        message: 'Usuário ' + (userUpdated ? 'encontrado' : 'inválido'),
        value: id,
    };

    return response.status(myResponse.status).json(myResponse);
};

export { UpdateUserController };
