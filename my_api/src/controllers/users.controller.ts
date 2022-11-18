// Import classes Responses and Resquest from the express dependencie
import { Response, Request } from 'express';
// Import User model to commuicate with the db
import User from '../database/models/User';
// Import the function services
import {
  createUser, updateUser,
  deleteUser, registerUser,
  loginUser,
} from '../services/user.service';

// Controller to create an user in the db Users table
async function create(req: Request, res: Response) {
  try {
    const created = await createUser(req);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to get all elements in the db Users table
async function getAll(req: Request, res: Response) {
  try {
    const getUser = await User.findAll();
    res.status(201).json(getUser);
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to get an element i n the db Users table
async function getById(req: Request, res: Response) {
  try {
    const idneo = req.params.id;
    const resultId = await User.findAll({
      where: {
        id: idneo,
      },
    });
    res.status(200).json(resultId);
  } catch (error) {
    res.status(400).json({
      'Request error': error,
    });
  }
}

// Controller to delete an element in the db Orders table
async function deleteById(req: Request, res: Response) {
  try {
    deleteUser(req);
    res.status(200).json({
      message: 'Resource deleted succesfully',
    });
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to update an element in th edb Orders table
async function updateById(req: Request, res: Response) {
  try {
    updateUser(req);
    res.status(200).json({
      message: 'Resource updated succesfully',
    });
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to register a new user
async function register(req: Request, res: Response) {
  try {
    const regist = await registerUser(req);
    res.status(200).json(regist);
  } catch (error) {
    res.status(400).json({
      'Request error': error,
    });
  }
}

// Controller to login a user
async function login(req: Request, res: Response) {
  try {
    const log = await loginUser(req);
    if (log.length === 40) {
      res.status(400).json({
        error: log,
      });
    } else {
      res.status(200).json({
        token: log,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: 'The informations probided do not match any account',
    });
  }
}

// exporting all elements
export {
  getAll, getById,
  create, updateById,
  deleteById, register,
  login,
};
