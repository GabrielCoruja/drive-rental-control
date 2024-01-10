import { DataTypes, Model, QueryInterface } from 'sequelize';
import Car from '../../../../domain/entities/Car';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Car>>('cars', {
      licensePlateId: {
        type: DataTypes.CHAR(8),
        primaryKey: true,
        allowNull: false,
        field: 'license_plate_id',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('cars');
  },
};
