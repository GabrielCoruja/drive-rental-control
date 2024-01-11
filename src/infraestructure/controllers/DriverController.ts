import { Request, Response } from 'express';
import DriverUseCase from '../../domain/usecase/DriverUseCase';
import StatusCode from '../enum/statusCode';

class DriverController {
  private messageDriverNotFound = 'Driver not found';

  constructor(private driverUseCase: DriverUseCase) { }

  async create(req: Request, res: Response): Promise<Response> {
    const { fullname, email } = req.body;

    const driver = await this.driverUseCase.create({ fullname, email });

    return res.status(StatusCode.CREATED).json(driver);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { fullname, email } = req.body;

    const driver = await this.driverUseCase.update(id, { fullname, email });
    if (!driver) {
      return res.status(StatusCode.NOT_FOUND).json({ message: this.messageDriverNotFound });
    }

    return res.status(StatusCode.OK).json(driver);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteDriver = await this.driverUseCase.delete(id);
    if (deleteDriver === null) {
      return res.status(StatusCode.NOT_FOUND).json({ message: this.messageDriverNotFound });
    }

    return res.status(StatusCode.NO_CONTENT).end();
  }

  async getAllByName(req: Request, res: Response): Promise<Response> {
    const { fullname } = req.query;

    const drivers = await this.driverUseCase.getAllByName(fullname as string);

    return res.status(StatusCode.OK).json(drivers);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const driver = await this.driverUseCase.getById(id);
    if (!driver) {
      return res.status(StatusCode.NOT_FOUND).json({ message: this.messageDriverNotFound });
    }

    return res.status(StatusCode.OK).json(driver);
  }
}

export default DriverController;
