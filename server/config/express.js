import schemaOrder from '../schemas/orderSchema.js';
import express from 'express';
import morgan from 'morgan';

const App = express();

// Middlewares
App.use(express.json());
App.use(morgan('dev'));


// Routes
App.use('/order', schemaOrder);
App.use(express.static('.../public'));

export default App;