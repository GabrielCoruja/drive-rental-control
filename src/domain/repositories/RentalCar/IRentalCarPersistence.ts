import RentalCar from '../../entities/RentalCar';

interface IRentalCarPersistence {
  save(rentalCar: Omit<RentalCar, 'startDate' | 'endDate'>): Promise<RentalCar>;
  update(driverId: string): Promise<RentalCar | null>;
  getById(driverId: string): Promise<RentalCar | null>;
  getCarAndDriberAbleToRent(driverId: number, licensePlateId: string): Promise<RentalCar | null>;
}

export default IRentalCarPersistence;
