import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
  __id:{
    type:String, 
    require:true, 
    unique:true, 
    _id:false
  },
  orden:{
      require:true,
      type:Object,
      default:{
        food:{
          type: Array,
          default: []
        },
        extra:{
          type: Array,
          default: []
        },
        drinks:{
          type: Array,
          default: []
        }
      }
  },
  address:{
    city:{
        type: String,
        require: true
      },
    street:{
        type: String,
        require: true
      },
    number:{
        type: String,
        require: true
      },
     dto:{
        type: String,
        require: true
      }
    },
    price:{
      type:Number,
      require:true
    }
});


const OrderModel = mongoose.model('order',orderSchema);

export default OrderModel;
