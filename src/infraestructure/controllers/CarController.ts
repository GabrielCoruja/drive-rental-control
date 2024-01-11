import { Request, Response } from 'express';
import CarUseCase from '../../domain/usecase/CarUseCase';
import StatusCode from '../enum/statusCode';

class CarController {
  private messageCarNotFound = 'Car not found';

  constructor(private carUseCase: CarUseCase) { }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, brand, color, licensePlateId } = req.body;

    const car = await this.carUseCase.create({ name, brand, color, licensePlateId });

    return res.status(StatusCode.CREATED).json(car);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, brand, color, licensePlateId } = req.body;

    const car = await this.carUseCase.update(id, { name, brand, color, licensePlateId });

    if (!car) return res.status(StatusCode.NOT_FOUND).json({ message: this.messageCarNotFound });

    return res.status(StatusCode.OK).json(car);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCar = await this.carUseCase.delete(id);
    if (deleteCar === null) {
      return res.status(StatusCode.NOT_FOUND).json({ message: this.messageCarNotFound });
    }

    return res.status(StatusCode.NO_CONTENT).end();
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const { color, brand } = req.query;
    const cars = await this.carUseCase.getAll(color as string, brand as string);

    return res.status(StatusCode.OK).json(cars);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const car = await this.carUseCase.getById(id);
    if (!car) return res.status(StatusCode.NOT_FOUND).json({ message: this.messageCarNotFound });

    return res.status(StatusCode.OK).json(car);
  }
}

export default CarController;
