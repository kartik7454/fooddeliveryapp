import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
  email: String,
  name:String,
  phonenumber: Number,
  address: String,
  postalcode: Number,
  cartitem: Object,
  stripeid:String,
  status: {type:String,
    default:"pending"
  },
}, {timestamps: true});

export const Order = models?.Order || model('Order', OrderSchema);