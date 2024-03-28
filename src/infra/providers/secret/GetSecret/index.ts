import { client } from '@prismaC/client';

const GetSecret = async (id: string) => {
    const myUser = await client.users
        .findFirst({
            where: { id },
        })
        .then();

    const mySecret = myUser?.secret;

    return mySecret;
};

export { GetSecret };
