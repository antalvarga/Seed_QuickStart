import dayjs from 'dayjs';

const GenerateRefreshToken = async (userId: string) => {
    const dataAtual = dayjs();
    const novaData = dataAtual.add(30, 'second');
    const expiredIn = novaData.unix();

    const data = {
        userId,
        expiredIn,
    };

    return data;
};

export { GenerateRefreshToken };
