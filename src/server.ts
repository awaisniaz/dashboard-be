import express, { Request, Response } from 'express';
import dashboardRoute from './api/dashboard-api';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your front-end domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

};

// Use the cors middleware with options
app.use(cors(corsOptions));
app.use('/api', dashboardRoute);

app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong !');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
