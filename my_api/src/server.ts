import { Response, Request, Application } from 'express';
import cors from 'cors';
// Importing all different routers
import CategoriesRouter from './routes/categories.route';
import ProductRouter from './routes/products.route';
import OrderRouter from './routes/orders.route';
import UserRouter from './routes/users.route';

// Calling express dependencie
const express = require('express');
// Initializing an express application
const app: Application = express();
// chossing a port for the application
const port = 5000;

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: true,
};

// use cors middleware
app.use(cors(options));

app.use(express.json());

// Calling a get request in the specified uri
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World :!!!',
  });
});

// Calling a post request in the specified uri
app.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'I am a POST request',
  });
});

// Calling every different router in a specific uri
app.use('/category', CategoriesRouter);
app.use('/order', OrderRouter);
app.use('/product', ProductRouter);
app.use('/user', UserRouter);

// Telling the app wich port to listen
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
