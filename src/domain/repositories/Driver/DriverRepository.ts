import Driver from '../../entities/Driver';
import IDriverPersistence from './IDriverPersistence';

class DriverRepository {
  constructor(private iDriverPersistence: IDriverPersistence) { }

  async create(driver: Omit<Driver, 'id'>): Promise<Driver> {
    return this.iDriverPersistence.save(driver);
  }

  async update(id: string, driver: Partial<Driver>): Promise<Driver | null> {
    return this.iDriverPersistence.update(id, driver);
  }

  async delete(id: string): Promise<void | null> {
    this.iDriverPersistence.delete(id);
  }

  async getById(id: string): Promise<Driver | null> {
    return this.iDriverPersistence.getById(id);
  }

  async getAllByName(fullname: string): Promise<Driver[]> {
    return this.iDriverPersistence.getAllByName(fullname);
  }
}

export default DriverRepository;
