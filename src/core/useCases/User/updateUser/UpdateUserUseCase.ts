import { client } from '@infra/prisma/client';
import { TypeUserZodSchema } from '@core/models/user/UserZodSchema';

const UpdateUserUseCase = async (
    id: string,
    dtoUserZodSchema: TypeUserZodSchema,
) => {
    const userFinded = await client.users.findFirst({ where: { id } });

    if (!userFinded) {
        throw new Error('Usuário não existe ');
    }

    const userUpdated = await client.users.update({
        where: { id },
        data: dtoUserZodSchema,
    });

    client.$disconnect();

    return userUpdated;
};

export { UpdateUserUseCase };
