const table = 'users';

export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction(async transaction => {
      const attributes = {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.literal('gen_random_uuid()'),
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
        },
      };

      await queryInterface.createTable(table, attributes, { transaction });

      // await queryInterface.addIndex(table, ['email'], { transaction });
    }),

  down: queryInterface => queryInterface.dropTable(table),
};
