import RentalCarController from '../controllers/RentalCarController';
import RentalCarRepository from '../../domain/repositories/RentalCar/RentalCarRepository';
import RentalCarUseCase from '../../domain/usecase/RentalCarUseCase';
import RentalCarPersistence from '../persistence/RentalCarPersistence';
import RentalCarModel from '../persistence/database/models/RentalCarModel';
import DriverModel from '../persistence/database/models/DriverModel';
import CarModel from '../persistence/database/models/CarModel';

const rentalCarPersistence = new RentalCarPersistence(RentalCarModel, DriverModel, CarModel);
const rentalCarRepository = new RentalCarRepository(rentalCarPersistence);
const rentalCarUseCases = new RentalCarUseCase(rentalCarRepository);
const controller = new RentalCarController(rentalCarUseCases);

export default controller;
