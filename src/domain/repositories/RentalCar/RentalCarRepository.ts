import RentalCar from '../../entities/RentalCar';
import IRentalCarPersistence from './IRentalCarPersistence';

class DriverRepository {
  constructor(private iRentalCarPersistence: IRentalCarPersistence) { }

  async create(rentalCar: Omit<RentalCar, 'startDate' | 'endDate'>): Promise<RentalCar> {
    console.log('testresesse', rentalCar);
    return this.iRentalCarPersistence.save(rentalCar);
  }

  async update(driverId: string): Promise<RentalCar | null> {
    return this.iRentalCarPersistence.update(driverId);
  }

  async getById(driverId: string): Promise<RentalCar | null> {
    return this.iRentalCarPersistence.getById(driverId);
  }

  async getCarAndDriberAbleToRent(
    driverId: number,
    licensePlateId: string,
  ): Promise<RentalCar | null> {
    return this.iRentalCarPersistence.getCarAndDriberAbleToRent(driverId, licensePlateId);
  }
}

export default DriverRepository;
