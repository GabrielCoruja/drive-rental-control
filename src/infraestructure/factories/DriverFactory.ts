import DriverController from '../controllers/DriverController';
import DriverRepository from '../../domain/repositories/Driver/DriverRepository';
import DriverUseCase from '../../domain/usecase/DriverUseCase';
import DriverPersistence from '../persistence/DriverPersistence';
import DriverModel from '../persistence/database/models/DriverModel';

const driverPersistence = new DriverPersistence(DriverModel);
const driverRepository = new DriverRepository(driverPersistence);
const driverUseCases = new DriverUseCase(driverRepository);
const controller = new DriverController(driverUseCases);

export default controller;
