import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, RequestHandler } from 'express';
import { ApiError } from '@infra/providers/apis/Error';
import { IMyResponseData } from '@interfaces/myResponse/IMyResponse';

const myFile = './src/core/useCases/User/importUser/user.txt';

const importUserTxtController: RequestHandler = async (
    request: Request,
    response: Response,
) => {
    if (!fs.existsSync(myFile)) {
        throw new ApiError(
            `O arquivo '${myFile}' não foi encontrado.`,
            StatusCodes.NOT_FOUND,
            0,
        );
    }

    let fileContent;

    try {
        fileContent = fs.readFileSync(myFile, 'utf8');
    } catch (error) {
        console.log(
            `Erro na abertura do arquivo: ${error}`,
            StatusCodes.BAD_REQUEST,
            0,
        );
        return false;
    }

    const lines = fileContent.split('\n').filter((line) => line.trim() != '');
    const columns = lines.map((line) => line.split(';'));
    const myData = columns.map((cols) => {
        return {
            name: cols[0],
            birth: cols[1],
        };
    });

    const myUsersImported = JSON.stringify(myData);

    const myResponse: IMyResponseData = {
        status: myUsersImported ? StatusCodes.OK : StatusCodes.BAD_REQUEST,
        message: 'Usuarios ' + (myUsersImported ? 'importados' : 'não lidos'),
        value: '0',
        ...myData,
    };

    return response.status(myResponse.status).send(myResponse);
};

export { importUserTxtController };
