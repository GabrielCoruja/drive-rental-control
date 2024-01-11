import RentalCar from '../entities/RentalCar';
import RentalCarRepository from '../repositories/RentalCar/RentalCarRepository';

class CarUseCase {
  constructor(private carRepository: RentalCarRepository) {}

  public async create(
    rentalCar: Omit<RentalCar, 'startDate' | 'endDate'>,
  ): Promise<RentalCar | null> {
    const findCar = await this.carRepository.getCarAndDriberAbleToRent(
      rentalCar.driverId,
      rentalCar.licensePlateId,
    );

    if (findCar) return null;

    return this.carRepository.create(rentalCar);
  }

  public async getById(driverId: string): Promise<RentalCar | null> {
    const findCar = await this.carRepository.getById(driverId);
    return findCar;
  }

  public async update(driverId: string): Promise<RentalCar | null> {
    const findCar = await this.carRepository.getById(driverId);

    if (!findCar) return null;

    return this.carRepository.update(driverId);
  }
}

export default CarUseCase;
