import { Router, Request, Response } from 'express';
import { Providers } from '@provider/index';
import { User } from '@core/useCases';

const UserRoutes = Router();

UserRoutes.get('/user', User.GetUserController);
UserRoutes.post('/userzod', User.CreateUserZodController);
UserRoutes.delete('/user/:id', User.RemoveUserController);
UserRoutes.get(
    '/userauthenticated/:id',
    Providers.Token.checkToken,
    (request: Request, response: Response) => {
        return response.json([
            { id: 1, name: 'NodeJs' },
            { id: 2, name: 'ReactJs' },
            { id: 3, name: 'React Native' },
            { id: 4, name: 'Flutter' },
            { id: 5, name: 'Elixir' },
        ]);
    },
);

export default UserRoutes;
