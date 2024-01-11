import { Router, Request, Response } from 'express';
import rentalCarController from '../../infraestructure/factories/RentalCarFactory';

const router = Router();

router.post('/', (req: Request, res: Response) => rentalCarController.create(req, res));
router.put('/:driverId', (req: Request, res: Response) => rentalCarController.update(req, res));
router.get('/:driverId', (req: Request, res: Response) => rentalCarController.getById(req, res));

export default router;
