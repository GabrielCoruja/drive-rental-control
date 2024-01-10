import Car from '../../entities/Car';

interface ICarPersistence {
  save(car: Omit<Car, 'id'>): Promise<Car>;
  update(id: string, car: Partial<Car>): Promise<Car | null>;
  delete(id: string): Promise<void | null>;
  getById(id: string): Promise<Car | null>;
  getAll(): Promise<Car[]>;
}

export default ICarPersistence;
