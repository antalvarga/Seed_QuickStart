import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
    TypeUserAuthenticationZodSchema,
    UserAuthenticationZodSchema,
} from '@core/models/user/UserAuthenticateZodSchema';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { ZodError } from 'zod';
import { zodErrors } from '@core/helpers/zodErrors';

const AuthenticateUserController: RequestHandler = async (
    request: Request,
    response: Response,
) => {
    const dtoUserAuthenticate: TypeUserAuthenticationZodSchema =
        request.body as TypeUserAuthenticationZodSchema;

    try {
        UserAuthenticationZodSchema.parse(dtoUserAuthenticate);
    } catch (error) {
        const errors = error as ZodError;
        const listError = zodErrors.returnZodListErrors(errors);

        return response.status(StatusCodes.BAD_REQUEST).send(listError);
    }

    const userAuthenticatedToken =
        await AuthenticateUserUseCase(dtoUserAuthenticate);

    return response.status(StatusCodes.OK).send(userAuthenticatedToken);
};

export { AuthenticateUserController };
