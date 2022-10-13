import express from 'express';
import morgan from 'morgan';
import orderRouter from '../routers/order.routes.js';

const App = express();

// Middlewares
App.use(express.json());
App.use(morgan('dev'));


// Routes
App.use('/order', orderRouter);
App.use(express.static('.../public'));

export default App;