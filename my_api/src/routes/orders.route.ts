// Importing Router interface from express dependencie
import { Router } from 'express';
// Importing authenticateJWT from middlexares
import authenticateJWT from '../middlewares/authenticateJWT';
// Importing all controllers from categories controller
import {
  getAll, getById,
  create, updateById,
  deleteById,
} from '../controllers/orders.controller';

// Calling express dependecie in a respective variable
const express = require('express');

// Initializing a router with express in a variable
const OrderRouter: Router = express.Router();

// Initializing all respective Controllers with a different request type, in is specific uri
OrderRouter.post('/', authenticateJWT, create);
OrderRouter.get('/', getAll);
OrderRouter.get('/:id', getById);
OrderRouter.patch('/:id', authenticateJWT, updateById);
OrderRouter.delete('/:id', authenticateJWT, deleteById);

// Exporting Categories router
export default OrderRouter;
