import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class DriverModel extends Model<InferAttributes<DriverModel>,
InferCreationAttributes<DriverModel>> {
  declare id: CreationOptional<number>;
  declare fullname: string;
  declare email: string;
}

DriverModel.init({
  id: {
    type: DataTypes.INTEGER,
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
}, {
  tableName: 'drivers',
  timestamps: false,
  underscored: true,
  sequelize: db,
});

export default DriverModel;
