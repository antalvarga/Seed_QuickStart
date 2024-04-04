import { Router } from 'express';
import UserRoutes from './user';

const routes = Router();

routes.use(UserRoutes);

export default routes;
