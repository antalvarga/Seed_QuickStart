import { client } from '@infra/prisma/client';

const RemoveUserUseCase = async (id: string) => {
    // const deletedUser = await client.user.delete()
    const deletedUser = await client.users.findFirst({
        where: {
            id: id,
        },
    });

    client.$disconnect();

    return deletedUser;
};

export { RemoveUserUseCase };
