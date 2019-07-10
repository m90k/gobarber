import Sequelize from 'sequelize';
import Config from '../Config/Database';
import User from '../App/Models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(Config);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
