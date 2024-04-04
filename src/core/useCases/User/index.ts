import * as createUserZod from './createUser/CreateUserController';
import * as getUser from './getUser/GetUserController';
import * as removeUser from './removeUser/RemoveUserController';
import * as showUser from './showUser/ShowUserController';
import * as updateUser from './updateUser/UpdateUserController';

export const User = {
    ...getUser,
    ...createUserZod,
    ...removeUser,
    ...showUser,
    ...updateUser,
};
