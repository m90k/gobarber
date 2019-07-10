import { Router } from 'express';
import UserController from './App/Controllers/UserController';
import SessionController from './App/Controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
