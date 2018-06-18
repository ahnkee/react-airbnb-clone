import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../db/config';
const dbConfig = config[process.env.NODE_ENV || 'development'];
const { username, database, password, host, dialect } = dbConfig;

let db;

if (!db) {
  let sequelize;
  const basename = path.basename(module.filename);

  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    sequelize = new Sequelize(database, username, password, {
      host,
      dialect,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      operatorsAliases: false,
    });
  }

  const models = fs
    .readdirSync(__dirname)
    .filter(
      file =>
        !file.startsWith('.') && file !== basename && file.endsWith('.js'),
    )
    .reduce((acc, file) => {
      const _imported = require(path.join(__dirname, file));
      const { default: Model, attributes, options } = _imported;

      return Object.assign(acc, {
        [Model.name]: Model.init(attributes, { ...options, sequelize }),
      });
    }, {});

  Object.values(models).forEach(model => {
    if (typeof model.associate === typeof Function) {
      model.associate(models);
    }
  });

  db = {
    sequelize,
    Sequelize,
    ...models,
  };
}

export default db;
