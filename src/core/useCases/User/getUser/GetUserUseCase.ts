import { client } from '@infra/prisma/client';
import { IQueryProps } from '@interfaces/Queries/IQueryProps';

const GetUserUseCase = async (myQuery: IQueryProps) => {
    const myTotal = await client.users.count();

    const myPage = parseInt(myQuery.page as string, 10);
    const myLimit = parseInt(myQuery.limit as string, 10);

    const listUsers = await client.users.findMany({
        where: {},
        skip: (myPage - 1) * myLimit,
        take: myLimit,
    });

    client.$disconnect();

    const myResponse = {
        tablename: 'users',
        totalRecords: myTotal,
        recordsRead: listUsers.length,
        pagination: {
            page: myQuery.page,
            pagesize: myQuery.limit,
            totalpages: Math.ceil(myTotal / myLimit),
        },
        data: listUsers,
    };

    return myResponse;
};

export { GetUserUseCase };
