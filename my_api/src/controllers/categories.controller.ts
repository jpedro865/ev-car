// Importing classes Response and Request of express dependencies
import { Response, Request } from 'express';
// Importing Categories model to communicate with the db
import Categories from '../database/models/Categories';
// Import the function services
import { createCategory, updateCategory, deleteCategory } from '../services/category.service';

// Controller to create a new categorie in the db
async function create(req: Request, res: Response) {
  try {
    const created = await createCategory(req);
    res.status(201).json(created);
  } catch (error) {
    res.status(304).json({
      'Request error': error,
    });
  }
}

// Controller to get all elements in the db categories table
async function getAll(req: Request, res: Response) {
  try {
    const getCategories = await Categories.findAll();
    res.status(201).json(getCategories);
  } catch (error) {
    res.status(404).send({
      'Resource not founded': error,
    });
  }
}

// Controller to get an elements in the db categories table by it's id
async function getById(req: Request, res: Response) {
  try {
    const idneo = req.params.id;
    const resultId = await Categories.findAll({
      where: {
        id: idneo,
      },
    });
    res.status(200).json(resultId);
  } catch (error) {
    res.status(404).json({
      'Request error': error,
    });
  }
}

// Controller to delete an element in the db categories table
async function deleteById(req: Request, res: Response) {
  try {
    deleteCategory(req);
    res.status(204).json({
      message: 'Resource deleted succesfully',
    });
  } catch (error) {
    res.status(500).json({
      'Request error': error,
    });
  }
}

// Controller to update an element in the db categoties table
async function updateById(req: Request, res: Response) {
  try {
    updateCategory(req);
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
