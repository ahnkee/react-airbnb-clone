import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import * as config from './config';

const dbConfig = config[process.env.NODE_ENV || 'development'];
const { username, database, password, host, dialect } = dbConfig;
const modelsPath = path.join(__dirname, '../models');

let db;

if (!db) {
  let sequelize;

  if (config.use_env_variable) {
    // figure out how to pass in 'define' config
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
      define: {
        underscoredAll: true,
      },
    });
  }

  const models = fs
    .readdirSync(modelsPath)
    .filter(file => !file.startsWith('.') && file.endsWith('.js'))
    .reduce((acc, file) => {
      const _imported = require(path.join(modelsPath, file));
      const { default: Model, attributes, options = {} } = _imported;

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
    models,
  };
}

export default db;
