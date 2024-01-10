import { Router, Request, Response } from 'express';
import carController from '../../infraestructure/factories/CarFactory';

const router = Router();

router.post('/', (req: Request, res: Response) => carController.create(req, res));
router.put('/:id', (req: Request, res: Response) => carController.update(req, res));
router.delete('/:id', (req: Request, res: Response) => carController.delete(req, res));
router.get('/', (req: Request, res: Response) => carController.getAll(req, res));
router.get('/:id', (req: Request, res: Response) => carController.getById(req, res));

export default router;
