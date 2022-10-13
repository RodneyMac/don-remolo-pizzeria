import { Router } from "express";
import orderModel from '../schemas/orderSchema.js';

const Order = orderModel
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

orderRouter.post('/',async(req, res) => {
    const { orderid, food } = req.body;
    const order = new Order({ orderid, food }); //* definir modelo de orden 
    await order.save();
    res.sendStatus(201); // falta mandar error si no se cumple x condicion
  });                     ///esto lo voy a hacer en controllers y dto


// cancelar pedido
orderRouter.delete('/:id', async (req, res) => {
  await Order.findByIdAndRemove(req.params.id);
  res.json({status: 'order deleted'});
});


export default orderRouter;