import { Router } from 'express';
import UserRoutes from './user';
import AlgorithmRoutes from './algorithm';

const routes = Router();

routes.use(UserRoutes);
routes.use(AlgorithmRoutes);

export default routes;
