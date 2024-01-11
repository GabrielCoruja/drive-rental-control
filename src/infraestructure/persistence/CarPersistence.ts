import { ModelStatic } from 'sequelize';
import Car from '../../domain/entities/Car';
import ICarPersistence from '../../domain/repositories/Car/ICarPersistence';
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

    const test = await findCar.update(car);
    console.log('test', test);

    return findCar.dataValues;
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
    return (await this.carModel.findAll()).map((car) => car.dataValues);
  }
}

export default CarPersistence;
