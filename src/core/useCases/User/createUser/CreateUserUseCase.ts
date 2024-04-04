import bcrypt from 'bcrypt';
import { Providers } from '@provider/index';
import { client } from '@infra/prisma/client';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '@provider/apis/Error';
import { TypeUserZodSchema } from '@core/models/user/UserZodSchema';

const CreateUserZodUseCase = async (dtoUserZod: TypeUserZodSchema) => {
    const userAlreadyExists = await client.users.findFirst({
        where: { username: dtoUserZod.username },
    });

    if (userAlreadyExists) {
        throw new ApiError(
            `ApiError :: Usuário já existe`,
            StatusCodes.BAD_REQUEST,
            0,
        );
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(dtoUserZod.password, salt);

    dtoUserZod.secret = Providers.Secret.generateSecret();

    try {
        const myBrith = new Date(dtoUserZod.birth);

        const createdUser = await client.users
            .create({
                data: {
                    name: dtoUserZod.name,
                    username: dtoUserZod.username,
                    email: dtoUserZod.email,
                    whatsapp: dtoUserZod.whatsapp,
                    password: passwordHash,
                    birth: myBrith,
                    secret: dtoUserZod.secret,
                },
            })
            .then();

        return createdUser;
    } catch (error) {
        console.log(error);

        return false;
    } finally {
        await client.$disconnect();
    }
};

export { CreateUserZodUseCase };
