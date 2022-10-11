import { Schema } from "mongoose";
import mongoose from "mongoose";

const orderSchema = new Schema({
    // definir esquema de la orden
});

const modelOrder = mongoose.model('task',orderSchema);

export default modelOrder;
