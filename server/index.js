console.clear();
import * as dotenv from 'dotenv';
import Express from 'express';

dotenv.config()
const app = Express();

app.use(Express.static('../public'))

app.listen(process.env.PORT,()=>{
console.log(`server runing in the port ${process.env.PORT}`)
});