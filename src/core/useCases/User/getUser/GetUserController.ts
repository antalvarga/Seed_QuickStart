import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetUserUseCase } from './GetUserUseCase';
import { IQueryProps } from '@interfaces/Queries/IQueryProps';

const GetUserController = async (request: Request, response: Response) => {
    const {
        page = '1',
        limit = '10',
        filter = '1=1',
    }: IQueryProps = request.query as IQueryProps;

    const myQuery: IQueryProps = {
        page,
        limit,
        filter,
    };

    const listResult = await GetUserUseCase(myQuery);

    return response.status(StatusCodes.OK).json(listResult);
};

export { GetUserController };
