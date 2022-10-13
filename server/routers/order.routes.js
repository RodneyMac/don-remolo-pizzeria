import { Router } from "express";
import OrderModel from '../schemas/orderSchema.js';

const orderRouter = Router();

// orderRouter.post();
// orderRouter.put();
// orderRouter.delete();

// orderRouter.get();
// orderRouter.get();
// // ver el pedido

// orderRouter.get('/', async (req, res) => {
//   const orders = await Order.find();
//   res.json(orders);
// });

// 
orderRouter.get('/:id', async (req, res) => {
  const order = await OrderModel.findById(req.params.id);
  res.json(order);
});

// // hacer pedido

orderRouter.post('/',async(req, res) => {
    const { __id, orden, address, price } = req.body;
    const order = new OrderModel({ __id, orden, address, price}); //* definir modelo de orden 
    await order.save();
    return res.sendStatus(201); // falta mandar error si no se cumple x condicion
  });          ///esto lo voy a hacer en controllers y dto


// cancelar pedido
orderRouter.delete('/:id', async (req, res) => {
  await OrderModel.findByIdAndRemove(req.params.id);
  res.json({status: 'order deleted'});
});


export default orderRouter;