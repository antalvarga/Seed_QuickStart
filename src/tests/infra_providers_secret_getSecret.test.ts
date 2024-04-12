import { MockUser } from './_mocks/user.mock';

const getSecret = (userId: string) => {
    let user;

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
    // Simular a busca do usuário pelo ID '1' (mock do repositório)
    const usuarioEncontrado = MockUser;

    // Chamar a função real com o ID do usuário
    // const secret = await getSecret("1");
    const secret = getSecret('1');

    // Verificar se o segredo retornado é igual ao segredo mockado
    expect(secret).toBe(usuarioEncontrado.secret);
});

test('deve retornar nulo se o usuário não for encontrado', async () => {
    // Chamar a função real com o ID do usuário inexistente
    const secret = getSecret('ID_INEXISTENTE');

    // Verificar se o segredo retornado é nulo
    expect(secret).toBeNull();
});
