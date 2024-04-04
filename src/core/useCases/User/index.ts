import * as createUserZod from './createUser/CreateUserController';
import * as getUser from './getUser/GetUserController';

export const User = {
    ...getUser,
    ...createUserZod,
};
