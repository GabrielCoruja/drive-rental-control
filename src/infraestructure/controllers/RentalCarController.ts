import { Request, Response } from 'express';
import RentalCarUseCase from '../../domain/usecase/RentalCarUseCase';
import StatusCode from '../enum/statusCode';

class DriverController {
  private messageDriverNotFound = 'Driver not found';

  constructor(private rentalCarUseCase: RentalCarUseCase) { }

  async create(req: Request, res: Response): Promise<Response> {
    const { licensePlateId, driverId, description } = req.body;
    console.log('test coruja');

    const createNewRentalDriver = await this.rentalCarUseCase.create({
      licensePlateId, driverId, description,
    });

    if (!createNewRentalDriver) {
      return res.status(StatusCode.BAD_REQUEST).json({ message: 'Driver already rented' });
    }

    return res.status(StatusCode.CREATED).json(createNewRentalDriver);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { driverId } = req.params;

    const driverReturningCar = await this.rentalCarUseCase.update(driverId);
    if (!driverReturningCar) {
      return res.status(StatusCode.NOT_FOUND).json({ message: this.messageDriverNotFound });
    }

    return res.status(StatusCode.OK).json(driverReturningCar);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { driverId } = req.params;

    const driverData = await this.rentalCarUseCase.getById(driverId);
    if (!driverData) {
      return res.status(StatusCode.NOT_FOUND).json({ message: this.messageDriverNotFound });
    }

    return res.status(StatusCode.OK).json(driverData);
  }
}

export default DriverController;
