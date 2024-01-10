import Car from '../../entities/Car';
import ICarPersistence from './ICarPersistence';

class CarRepository {
  constructor(private iCarPersistence: ICarPersistence) { }

  async create(car: Omit<Car, 'id'>): Promise<Car> {
    return this.iCarPersistence.save(car);
  }

  async update(id: string, car: Partial<Car>): Promise<Car | null> {
    return this.iCarPersistence.update(id, car);
  }

  async delete(id: string): Promise<void | null> {
    this.iCarPersistence.delete(id);
  }

  async getById(id: string): Promise<Car | null> {
    return this.iCarPersistence.getById(id);
  }

  async getAll(): Promise<Car[]> {
    return this.iCarPersistence.getAll();
  }
}

export default CarRepository;
