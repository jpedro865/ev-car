// Importing Router interface from express dependencie
import { Router } from 'express';
// Importing authenticateJWT from middlexares
import authenticateJWT from '../middlewares/authenticateJWT';
// Importing all controllers from categories controller
import {
  getAll, getById,
  create, updateById,
  deleteById, register,
  login,
} from '../controllers/users.controller';

// Calling express dependecies in a respective variable
const express = require('express');

// Initializing a router with express in a variable
const UserRouter: Router = express.Router();

// Initializing all respective Controllers with a different request type, in is specific uri
UserRouter.post('/', authenticateJWT, create);
UserRouter.get('/', getAll);
UserRouter.get('/:id', getById);
UserRouter.patch('/:id', authenticateJWT, updateById);
UserRouter.delete('/:id', authenticateJWT, deleteById);

// Register router
UserRouter.post('/register', register);

// Login Router
UserRouter.post('/auth', login);

// Exporting Categories router
export default UserRouter;
