// Importing Request from express dependencie
import { Request } from 'express';
// Importing Categories model
import Categories from '../database/models/Categories';

// Method that creates a new Category
async function createCategory(req: Request) {
  const created = await Categories.create(req.body);
  return created;
}

// Method that updates an existing Category
async function updateCategory(req: Request) {
  const { id } = req.params;
  const updated = await Categories.update(req.body, {
    where: {
      id,
    },
  });
  return updated;
}

// delete of an existing order function relative to ID
async function deleteCategory(req: Request) {
  const { id } = req.params;
  const deleted = await Categories.destroy({
    where: {
      id,
    },
  });
  return deleted;
}

export { createCategory, updateCategory, deleteCategory };
