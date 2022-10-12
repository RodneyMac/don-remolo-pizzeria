import { Router } from "express";
import modelOrder from '../schemas/schemaOrder,js';

const Order = modelOrder
const orderRouter = Router();

// ver el pedido

orderRouter.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// 
orderRouter.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// hacer pedido

taskRouter.post('/', async (req, res) => {
  const {} = req.body;
  const order = new Order({}); //* definir modelo de orden (task)
  await order.save();
  res.sendStatus(201);  // falta mandar error si no se cumple x condicion
});


// cancelar pedido
orderRouter.delete('/:id', async (req, res) => {
  await Order.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});


export default orderRouter;