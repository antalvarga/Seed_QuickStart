import * as CheckToken from './CheckToken';
import * as GenerateToken from './GenerateToken';
import * as GenerateRefreshToken from './GenerateRefreshToken';

export const Token = {
    ...CheckToken,
    ...GenerateToken,
    ...GenerateRefreshToken,
};
