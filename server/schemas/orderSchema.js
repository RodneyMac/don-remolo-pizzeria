import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  // definir esquema
  // esquema de ejemplo:
  orderid:{type:String, require: true},
  food:{type:String, require:true}
});

const orderModel = model('order',orderSchema);

export default orderModel;
