import Driver from '../entities/Driver';
import DriverRepository from '../repositories/Driver/DriverRepository';

class DriverUseCase {
  constructor(private driverRepository: DriverRepository) {}

  public async create(driver: Omit<Driver, 'id'>): Promise<Driver> {
    return this.driverRepository.create(driver);
  }

  public async getAllByName(fullname: string): Promise<Driver[]> {
    return this.driverRepository.getAllByName(fullname);
  }

  public async getById(id: string): Promise<Driver | null> {
    const findDriver = await this.driverRepository.getById(id);
    return findDriver;
  }

  public async update(id: string, driver: Partial<Driver>): Promise<Driver | null> {
    const findDriver = await this.driverRepository.getById(id);

    if (!findDriver) return null;

    return this.driverRepository.update(id, driver);
  }

  public async delete(id: string): Promise<void | null> {
    const findDriver = await this.driverRepository.getById(id);

    if (!findDriver) return null;

    await this.driverRepository.delete(id);
  }
}

export default DriverUseCase;
