import Driver from '../../entities/Driver';

interface IDriverPersistence {
  save(driver: Omit<Driver, 'id'>): Promise<Driver>;
  update(id: string, driver: Partial<Driver>): Promise<Driver | null>;
  delete(id: string): Promise<void | null>;
  getById(id: string): Promise<Driver | null>;
  getAllByName(fullname: string): Promise<Driver[]>;
}

export default IDriverPersistence;
