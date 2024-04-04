import * as createUserZod from './createUser/CreateUserController';
import * as getUser from './getUser/GetUserController';
import * as removeUser from './removeUser/RemoveUserController';
import * as showUser from './showUser/ShowUserController';

export const User = {
    ...getUser,
    ...createUserZod,
    ...removeUser,
    ...showUser,
};
