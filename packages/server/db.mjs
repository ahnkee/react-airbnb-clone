import Sequelize from 'sequelize';
import config from './config';

export default cb => {
  const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
    host: config.dbHost,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorsAliases: false,
  });

  sequelize
    .authenticate()
    .then(() => cb(null, sequelize))
    .catch(err => cb(err, null));
};
