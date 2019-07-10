import { Router } from 'express';
import User from './App/Models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Marcos de Souza',
    email: 'm90kdeveloper@gmail.com',
    password: '1234566',
  });

  return res.json(user);
});

export default routes;
