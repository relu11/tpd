import { Sequelize } from 'sequelize';
import { DATABASE_URL } from './config';

const sequelize = new Sequelize(DATABASE_URL);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');
  } catch (err) {
    console.log('Unable to connect to database', err);
  }
})();

export default sequelize;
