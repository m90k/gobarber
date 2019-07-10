import jwt from 'jsonwebtoken';
import User from '../Models/User';

class SessionController {
  async store(req, res) {
    const { email, pass } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Este Usuário não Existe' });
    }

    if (!(await user.checkPassword(pass))) {
      return res.status(401).json({ error: 'Senha não Confere' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '8538607221f2e42284acf599214cfa34', {
        expiresIn: '10d',
      }),
    });
  }
}

export default new SessionController();
