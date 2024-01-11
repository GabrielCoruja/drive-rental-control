import { ModelStatic } from 'sequelize';
import Car from '../../domain/entities/Car';
import ICarPersistence, { CarFilter } from '../../domain/repositories/Car/ICarPersistence';
import CarModel from './database/models/CarModel';

class CarPersistence implements ICarPersistence {
  constructor(private carModel: ModelStatic<CarModel>) { }

  async save(car: Car): Promise<Car> {
    const newCar = await this.carModel.create(car);
    return newCar.dataValues;
  }

  async update(id: string, car: Partial<Car>): Promise<Car | null> {
    const findCar = await this.carModel.findByPk(id);
    if (!findCar) return null;

    return (await findCar.update(car)).dataValues;
  }

  async delete(id: string): Promise<void | null> {
    const findCar = await this.carModel.findByPk(id);
    if (!findCar) return null;
    await findCar.destroy();
  }

  async getById(id: string): Promise<Car | null> {
    const findCar = await this.carModel.findByPk(id);
    if (!findCar) return null;
    return findCar.dataValues;
  }

  async getAll(): Promise<Car[]> {
    const findCar = await this.carModel.findAll();
    return findCar.map((car) => car.dataValues);
  }

  async getAllByColorOrBrand(carFilter: CarFilter): Promise<Car[]> {
    const findCar = await this.carModel.findAll({
      where: carFilter,
    });
    return findCar.map((car) => car.dataValues);
  }
}

export default CarPersistence;
