import { MockUser } from '../_mocks/user.mock';

const getSecret = (userId: string) => {
    let user;

    // Simula uma pesquisa
    if (userId == MockUser.id) {
        user = MockUser;
    }

    // Se o usuário for encontrado, retornar o segredo
    if (user) {
        return user.secret;
    }

    // Se o usuário não for encontrado, retornar nulo
    return null;
};

test('deve retornar o segredo do usuário quando encontrado', async () => {
    const usuarioEncontrado = MockUser;

    const secret = getSecret('1');

    expect(secret).toBe(usuarioEncontrado.secret);
});

test('deve retornar nulo se o usuário não for encontrado', async () => {
    const secret = getSecret('ID_INEXISTENTE');

    expect(secret).toBeNull();
});
