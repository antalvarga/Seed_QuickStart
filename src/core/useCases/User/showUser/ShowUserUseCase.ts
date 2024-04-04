import { client } from '@infra/prisma/client';

const ShowUserUseCase = async (id: string) => {
    const showedUser = await client.users.findFirst({
        where: { id },
    });

    return showedUser;
};

export { ShowUserUseCase };
