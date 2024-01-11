import Car from '../entities/Car';
import CarRepository from '../repositories/Car/CarRepository';

class CarUseCase {
  constructor(private carRepository: CarRepository) { }

  public async create(car: Car): Promise<Car> {
    return this.carRepository.create(car);
  }

  public async getAll(color: string, brand: string): Promise<Car[]> {
    if (!color && !brand) return this.carRepository.getAll();

    const filter = { ...(color && { color }), ...(brand && { brand }) };
    return this.carRepository.getAllByColorOrBrand(filter);
  }

  public async getById(id: string): Promise<Car | null> {
    const findCar = await this.carRepository.getById(id);
    return findCar;
  }

  public async update(id: string, car: Partial<Car>): Promise<Car | null> {
    const findCar = await this.carRepository.getById(id);

    if (!findCar) return null;

    return this.carRepository.update(id, car);
  }

  public async delete(id: string): Promise<void | null> {
    const findCar = await this.carRepository.getById(id);

    if (!findCar) return null;

    await this.carRepository.delete(id);
  }
}

export default CarUseCase;
