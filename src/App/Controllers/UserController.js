import User from '../Models/User';

class UserController {
  async store(req, res) {
    const userEmailExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userEmailExists) {
      return res
        .status(400)
        .json({ error: 'Já Existe um Usuário com este Email' });
    }
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
