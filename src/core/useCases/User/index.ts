import * as createUserZod from './createUser/CreateUserController';
import * as getUser from './getUser/GetUserController';
import * as removeUser from './removeUser/RemoveUserController';
import * as showUser from './showUser/ShowUserController';
import * as updateUser from './updateUser/UpdateUserController';
import * as authenticateUser from './AuthenticateUser/AuthenticateUserController';

export const User = {
    ...getUser,
    ...authenticateUser,
    ...createUserZod,
    ...removeUser,
    ...showUser,
    ...updateUser,
};
