import { ModelStatic, Op } from 'sequelize';
import RentalCar from '../../domain/entities/RentalCar';
import IRentalCarPersistence from '../../domain/repositories/RentalCar/IRentalCarPersistence';
import RentalCarModel from './database/models/RentalCarModel';
import DriverModel from './database/models/DriverModel';
import CarModel from './database/models/CarModel';

class RentalCarPersistence implements IRentalCarPersistence {
  constructor(
    private rentalCarModel: ModelStatic<RentalCarModel>,
    private driverModel: ModelStatic<DriverModel>,
    private carModel: ModelStatic<CarModel>,
  ) { }

  async save(rentalCar: Omit<RentalCar, 'startDate' | 'endDate'>): Promise<RentalCar> {
    const newDriver = await this.rentalCarModel.create({
      licensePlateId: rentalCar.licensePlateId,
      driverId: rentalCar.driverId,
      description: rentalCar.description,
    });
    return newDriver.dataValues;
  }

  async update(id: string): Promise<RentalCar | null> {
    const findDriver = await this.rentalCarModel.findOne({
      where: { driverId: id, endDate: null as any },
      attributes: ['licensePlateId', 'driverId', 'startDate', 'endDate', 'description'],
    });

    console.log('findDriver', findDriver);
    if (!findDriver) return null;

    return (await findDriver.update({ endDate: new Date() })).dataValues;
  }

  async getById(driverId: string): Promise<RentalCar | null> {
    const findDriver = await this.driverModel.findOne({
      where: { id: driverId },
      include: [{
        model: this.carModel,
        as: 'rentalCars',
        attributes: ['licensePlateId', 'name', 'brand', 'color'],
        through: {
          attributes: ['startDate', 'endDate', 'description'],
        },
      }],
    });
    if (!findDriver) return null;

    return findDriver.dataValues as unknown as RentalCar;
  }

  async getCarAndDriberAbleToRent(
    driverId: number,
    licensePlateId: string,
  ): Promise<RentalCar | null> {
    const findDriverOrCar = await this.rentalCarModel.findOne({
      where: {
        [Op.and]: [
          { endDate: null as any },
          {
            [Op.or]: [
              { driverId },
              { licensePlateId },
            ],
          },
        ],
      },
    });

    if (!findDriverOrCar) return null;

    return findDriverOrCar.dataValues;
  }
}

export default RentalCarPersistence;
