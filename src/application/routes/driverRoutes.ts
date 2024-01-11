import { Router, Request, Response } from 'express';
import driverController from '../../infraestructure/factories/DriverFactory';

const router = Router();

router.post('/', (req: Request, res: Response) => driverController.create(req, res));
router.put('/:id', (req: Request, res: Response) => driverController.update(req, res));
router.delete('/:id', (req: Request, res: Response) => driverController.delete(req, res));
router.get('/', (req: Request, res: Response) => driverController.getAllByName(req, res));
router.get('/:id', (req: Request, res: Response) => driverController.getById(req, res));

export default router;
