import { ModelStatic, Op } from 'sequelize';
import Driver from '../../domain/entities/Driver';
import IDriverPersistence from '../../domain/repositories/Driver/IDriverPersistence';
import DriverModel from './database/models/DriverModel';

class DriverPersistence implements IDriverPersistence {
  constructor(private driverModel: ModelStatic<DriverModel>) { }

  async save(driver: Omit<Driver, 'id'>): Promise<Driver> {
    const newDriver = await this.driverModel.create(driver);
    return newDriver.dataValues;
  }

  async update(id: string, driver: Partial<Driver>): Promise<Driver | null> {
    const findDriver = await this.driverModel.findByPk(id);
    if (!findDriver) return null;

    return (await findDriver.update(driver)).dataValues;
  }

  async delete(id: string): Promise<void | null> {
    const findDriver = await this.driverModel.findByPk(id);
    if (!findDriver) return null;
    await findDriver.destroy();
  }

  async getById(id: string): Promise<Driver | null> {
    const findDriver = await this.driverModel.findByPk(id);
    if (!findDriver) return null;
    return findDriver.dataValues;
  }

  async getAllByName(fullname: string): Promise<Driver[]> {
    const getDrivers = await this.driverModel.findAll({
      where: {
        fullname: { [Op.iLike]: `%${fullname}%` },
      },
    });
    return getDrivers.map((driver) => driver.dataValues);
  }
}

export default DriverPersistence;
