import { Router } from "express";
const taskRouter = Router();

taskRouter.get('/',(req,res)=>{
  res.sendFile('.../public/index.html')
});

export default taskRouter;