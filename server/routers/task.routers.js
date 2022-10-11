import { Router } from "express";
import modelOrder from '../models/task.js';

const Task = modelOrder
const taskRouter = Router();

// ver el pedido

taskRouter.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// 
taskRouter.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// hacer pedido

taskRouter.post('/', async (req, res) => {
  const { falta, definir } = req.body;
  const task = new Task({}); //* definir modelo de orden (task)
  await task.save();
  res.sendStatus(200);  // falta mandar error si no se cumple x condicion
});

// editar pedido 

// taskRouter.put('/:id', async (req, res) => {
//   const { } = req.body;
//   const newTask = {};
//   await Task.findByIdAndUpdate(req.params.id, newTask);
//   res.json({status: 'Task Updated'});
// });

// cancelar pedido
taskRouter.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});


export default taskRouter;