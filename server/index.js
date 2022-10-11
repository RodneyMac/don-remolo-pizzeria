
import * as dotenv from 'dotenv';
import Express from 'express';
import taskRouter from './routers/task.routers.js';
import morgan from 'morgan';
import {path} from 'path';

//initialize server
PORT = process.env.PORT || 3000

dotenv.config()
const app = Express();

//Middlewares
app.use(Express.json());
app.use(morgan('dev'));

//routers
app.use('/',taskRouter);
app.use(Express.static(path.join(__dirname + '../public')));


//starting server
async function bootstraps() {
    await mongoose.connect(process.env.URI);

    app.listen(PORT, () => {
        console.log(`estoy en el puerto ${PORT} ta todo flama rey`);

    });
}

bootstraps();
