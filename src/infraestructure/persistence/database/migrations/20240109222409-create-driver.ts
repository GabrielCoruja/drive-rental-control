import { DataTypes, Model, QueryInterface } from 'sequelize';
import Driver from '../../../../domain/entities/Driver';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Driver>>('drivers', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drivers');
  },
};
