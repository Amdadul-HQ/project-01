import express, { Request, Response } from 'express';
import cors from "cors"
import { StudentRoutes } from './app/modules/students/student.route';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())


// application routes
app.use('/api/v1/students',StudentRoutes)

const getRespons = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/',getRespons);

export default app;
