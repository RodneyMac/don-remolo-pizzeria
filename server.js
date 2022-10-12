console.clear();
import * as dotenv from 'dotenv';
import Express from 'express';
import taskRouter from './server/routers/task.routers.js';
import morgan from 'morgan';

//initialize server
const PORT = process.env.PORT || 3000

dotenv.config();
const app = Express();

//Middlewares
app.use(Express.json());
app.use(morgan('dev'));

//routers
app.use('/order',taskRouter);
app.use(Express.static('./public'));


//starting server
async function bootstraps() {
    //await mongoose.connect(process.env.URI);

    app.listen(PORT, () => {
        console.log(`estoy en el puerto ${PORT} ta todo flama rey`);

    });
}

bootstraps();
