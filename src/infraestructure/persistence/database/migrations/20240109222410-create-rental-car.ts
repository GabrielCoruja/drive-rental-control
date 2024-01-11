import { DataTypes, Model, QueryInterface } from 'sequelize';
import RentalCar from '../../../../domain/entities/RentalCar';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<RentalCar>>('rental_cars', {
      licensePlateId: {
        type: DataTypes.CHAR(8),
        allowNull: false,
        field: 'license_plate_id',
        references: {
          model: 'cars',
          key: 'license_plate_id',
        },
      },
      driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id',
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'start_date',
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'end_date',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('rental_cars');
  },
};
