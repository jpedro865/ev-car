import { Request } from 'express';
import Product from '../database/models/Product';
// CRUD function

// creating a new product
async function createProduct(req: Request) {
  const created = await Product.create(req.body);
  return created;
}

// Update of an existing product relative to ID
async function updateProduct(req: Request) {
  const { id } = req.params;
  const updated = await Product.update(req.body, {
    where: {
      id,
    },
  });
  return updated;
}

// delete of an existing product function relative to ID
async function deleteProduct(req: Request) {
  const { id } = req.params;
  const deleted = await Product.destroy({
    where: {
      id,
    },
  });
  return deleted;
}

export { createProduct, updateProduct, deleteProduct };
