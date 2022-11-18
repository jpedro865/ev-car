import { Request } from 'express';
import Order from '../database/models/Order';

// creating a new order
async function createOrder(req: Request) {
  const created = await Order.create(req.body);
  return created;
}

// Update of an existing order relative to ID
async function updateOrder(req: Request) {
  const { id } = req.params;
  const updated = await Order.update(req.body, {
    where: {
      id,
    },
  });
  return updated;
}

// delete of an existing order function relative to ID
async function deleteOrder(req: Request) {
  const { id } = req.params;
  const deleted = await Order.destroy({
    where: {
      id,
    },
  });
  return deleted;
}

export { createOrder, updateOrder, deleteOrder };
