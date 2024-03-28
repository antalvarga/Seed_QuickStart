import { sign } from 'jsonwebtoken';

const GenerateToken = async (userId: string, secret: string) => {
    const mySecret = secret || (process.env.SECRET as string);

    const token = sign({}, mySecret, {
        subject: userId,
        expiresIn: '60s',
    });

    return token;
};

export { GenerateToken };
