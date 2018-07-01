export const development = {
  username: 'postgres',
  password: '',
  database: 'react-airbnb-clone-dev',
  host: '127.0.0.1',
  dialect: 'postgres',
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'sequelize_migrations',
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_seeders',
};

export const test = {
  username: 'postgres',
  password: '',
  database: 'react-airbnb-clone-test',
  host: '127.0.0.1',
  dialect: 'postgres',
};

export const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'sequelize_migrations',
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_seeders',
};
