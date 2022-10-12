import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  // definir esquema
});

const schemaOrder = model('order',orderSchema);

export default schemaOrder;
