import CarController from '../controllers/CarController';
import CarRepository from '../../domain/repositories/Car/CarRepository';
import CarUseCase from '../../domain/usecase/CarUseCase';
import CarPersistence from '../persistence/CarPersistence';
import CarModel from '../persistence/database/models/CarModel';

const carPersistence = new CarPersistence(CarModel);
const carRepository = new CarRepository(carPersistence);
const carUseCases = new CarUseCase(carRepository);
const controller = new CarController(carUseCases);

export default controller;
