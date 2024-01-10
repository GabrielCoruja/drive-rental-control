import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class CarModel extends Model<InferAttributes<CarModel>,
InferCreationAttributes<CarModel>> {
  declare licensePlateId: string;
  declare name: string;
  declare brand: string;
  declare color: string;
}

CarModel.init({
  licensePlateId: {
    type: DataTypes.CHAR(8),
    primaryKey: true,
    allowNull: false,
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
}, {
  tableName: 'cars',
  timestamps: false,
  underscored: true,
  sequelize: db,
});

export default CarModel;
