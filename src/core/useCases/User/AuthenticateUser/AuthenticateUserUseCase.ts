import { compare } from 'bcrypt';
import { Providers } from '@provider/index';
import { client } from '@infra/prisma/client';
import { TypeUserAuthenticationZodSchema } from '@core/models/user/UserAuthenticateZodSchema';

const AuthenticateUserUseCase = async ({
    username,
    password,
}: TypeUserAuthenticationZodSchema) => {
    const userAlreadyExists = await client.users.findFirst({
        where: { username },
    });

    if (!userAlreadyExists) {
        throw new Error('Usuário ou senha incorreta 1!');
    }

    if (!password || !userAlreadyExists.password) {
        throw new Error('Usuário ou senha incorreta 1!');
    }

    const passwordMatch = compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
        throw new Error('Usuário ou senha incorreta !');
    }

    const secret = userAlreadyExists.secret || '0';

    const token = await Providers.Token.GenerateToken(
        userAlreadyExists.id,
        secret,
    );

    const myMessage = {
        token,
        secret,
    };

    return myMessage;
};

export { AuthenticateUserUseCase };
