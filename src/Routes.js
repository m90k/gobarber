import { Router } from 'express';
import UserController from './App/Controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
