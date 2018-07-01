const table = 'users';

const users = [{ email: 'andrew.a.lee@gmail.com', password: 'testing!!!' }];

export default {
  up: queryInterface => queryInterface.bulkInsert(table, users),

  down: queryInterface =>
    queryInterface.sequelize.query(`TRUNCATE ${table} CASCADE`),
};
