import 'express-async-errors';
import * as express from 'express';
import helmet from 'helmet';
import carRoutes from './routes/carRoutes';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/cars', carRoutes);
app.use(ErrorHandler.handleError);

export default app;
