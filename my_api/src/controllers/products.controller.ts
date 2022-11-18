// Import classes Response and Request from express dependencie
import { Response, Request } from 'express';
// Import Product model to communicate in db
import Product from '../database/models/Product';
// Import the function services
import { createProduct, updateProduct, deleteProduct } from '../services/product.service';

// Controller to create new product in db Products table
async function create(req: Request, res: Response) {
  try {
    const created = await createProduct(req);
    res.status(201).json(created);
  } catch (error) {
    res.json({
      'Request error': error,
    });
  }
}

// Controller to get all elements in the db Products table
async function getAll(req: Request, res: Response) {
  try {
    const getProduct = await Product.findAll();
    res.status(201).json(getProduct);
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to get an element in the db Products table by it's id
async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const resultId = await Product.findAll({
      where: {
        id,
      },
    });
    res.status(200).json(resultId);
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to delete an elements in the db Products table
async function deleteById(req: Request, res: Response) {
  try {
    deleteProduct(req);
    res.status(204).json({
      message: 'Resource deleted succesfully',
    });
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to update an elments in the db Products table
async function updateById(req: Request, res: Response) {
  try {
    updateProduct(req);
    res.status(200).json({
      message: 'Resource updated succesfully',
    });
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// exporting all controllers
export {
  getAll, getById,
  create, updateById,
  deleteById,
};
