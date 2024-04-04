import { client } from '@infra/prisma/client';

const ShowUserUseCase = async (id: string) => {
    const showedUser = await client.users.findFirst({
        where: { id },
    });

    client.$disconnect();

    return showedUser;
};

export { ShowUserUseCase };
