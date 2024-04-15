import crypto from 'crypto';

const _test_generate_secret = () => {
    return crypto.randomBytes(32).toString('hex');
};

describe('infra_providers_secret_generateSecret.test', () => {
    it('deve retornar um segredo valido', () => {
        const secret = _test_generate_secret();

        expect(secret).toMatch(/^[0-9a-f]{64}$/);
    });
});
