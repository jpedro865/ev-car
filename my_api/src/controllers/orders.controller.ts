// Importing classes Response and Request from express dependencie
import { Response, Request } from 'express';
// Import Order model to communicate with db
import Order from '../database/models/Order';
// Import the function services
import { createOrder, updateOrder, deleteOrder } from '../services/order.service';

// Controller to create new Order in the db Orders table
async function create(req: Request, res: Response) {
  try {
    const created = await createOrder(req);
    res.status(201).send(created);
  } catch (error) {
    res.send(`Erreur de requete:\n${error}`);
  }
}

// Controller to get all elements in the db Orders table
async function getAll(req: Request, res: Response) {
  try {
    const getOrder = await Order.findAll();
    res.status(201).json(getOrder);
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to get an elements in the db Orders table by it's id
async function getById(req: Request, res: Response) {
  try {
    const idneo = req.params.id;
    const resultId = await Order.findAll({
      where: {
        id: idneo,
      },
    });
    res.status(200).json(resultId);
  } catch (error) {
    res.json({
      'Request error': error,
    });
  }
}

// Controller to delete an elements in the db Orders table
async function deleteById(req: Request, res: Response) {
  try {
    deleteOrder(req);
    res.status(204).json({
      message: 'Resource deleted succesfully',
    });
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to update an elements in the db Orders table
async function updateById(req: Request, res: Response) {
  try {
    updateOrder(req);
    res.status(200).json({
      message: 'Resource updated succesfully',
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// exporting all controller
export {
  getAll, getById,
  create, updateById,
  deleteById,
};
