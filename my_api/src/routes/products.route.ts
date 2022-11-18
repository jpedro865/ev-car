// Importing Router interface from express dependencie
import { Router } from 'express';
// Importing authenticateJWT from middlexares
import authenticateJWT from '../middlewares/authenticateJWT';
// Importing all controllers from categories controller
import {
  getAll, getById,
  create, updateById,
  deleteById,
} from '../controllers/products.controller';

// Calling express dependecie in a respective variable
const express = require('express');

// Initializing a router with express in a variable
const ProductRouter: Router = express.Router();

// Initializing all respective Controllers with a different request type, in is specific uri
ProductRouter.post('/', authenticateJWT, create);
ProductRouter.get('/', getAll);
ProductRouter.get('/:id', getById);
ProductRouter.patch('/:id', authenticateJWT, updateById);
ProductRouter.delete('/:id', authenticateJWT, deleteById);

// Exporting Categories router
export default ProductRouter;
