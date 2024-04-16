import { MockUser } from '../_mocks/user.mock';
import { sign } from 'jsonwebtoken';

const _test_getSecret = (userId: string) => {
    if (userId == MockUser.id) {
        return MockUser.secret;
    } else {
        return '0';
    }
};

const _test_generateToken = (userId: string, secret: string) => {
    const token = sign({}, secret, {
        subject: userId,
        expiresIn: '60s',
    });

    return token;
};

describe('infra_provider_token_getToken.test', () => {
    const myUser = '1';
    const secret = _test_getSecret(myUser);

    it('deve retornar meu segredo valido', () => {
        expect(secret).not.toBeNull();
    });

    const token = _test_generateToken(myUser, secret);

    it('deve retornar um token valido ', () => {
        // expect(token).toMatch(/^[0-9a-f]{64}$/);
        expect(token).not.toBeNull();
        expect(token.split('.').length).toBe(3);
    });
});
