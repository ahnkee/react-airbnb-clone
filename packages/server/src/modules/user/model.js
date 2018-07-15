import Sequelize, { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

export const attributes = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

export const options = {
  defaultScope: {
    attributes: {
      exclude: ['password'],
    },
  },
};

export default class User extends Model {
  /**
   * Encrypt password field
   * @throws Error if password does not exist
   * @return {object} reference to user instance
   */
  async hashPassword() {
    if (!this.password) {
      throw new Error('password does not exist for user');
    }

    this.password = await bcrypt.hash(this.password, 10);

    return this;
  }
}
