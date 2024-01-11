import Car from '../../entities/Car';

export type CarFilter = {
  brand?: string;
  color?: string;
};

interface ICarPersistence {
  save(car: Car): Promise<Car>;
  update(id: string, car: Partial<Car>): Promise<Car | null>;
  delete(id: string): Promise<void | null>;
  getById(id: string): Promise<Car | null>;
  getAll(): Promise<Car[]>;
  getAllByColorOrBrand(carFilter: CarFilter): Promise<Car[]>;
}

export default ICarPersistence;
