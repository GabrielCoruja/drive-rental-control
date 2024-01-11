import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import DriverModel from './DriverModel';
import CarModel from './CarModel';

class RentalCarModel extends Model<InferAttributes<RentalCarModel>,
InferCreationAttributes<RentalCarModel>> {
  declare licensePlateId: string;
  declare driverId: number;
  declare startDate: CreationOptional<Date>;
  declare endDate: CreationOptional<Date> | null;
  declare description: string;
}

RentalCarModel.init({
  licensePlateId: {
    type: DataTypes.CHAR(8),
    primaryKey: true,
  },
  driverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'driver_id',
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'rental_cars',
  timestamps: false,
  underscored: true,
  sequelize: db,
});

CarModel.belongsToMany(DriverModel, {
  through: RentalCarModel,
  foreignKey: 'license_plate_id',
  as: 'drivers',
});

DriverModel.belongsToMany(CarModel, {
  through: RentalCarModel,
  foreignKey: 'driver_id',
  as: 'rentalCars',
});

export default RentalCarModel;
