import mongoose, {model, models, Schema} from "mongoose";
const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
})
const Item = mongoose.Schema(
  {
    key:String,
    title :String,
    discription:String,
   image:String,
   price:Number,
   type:String,
   size:{type:[ExtraPriceSchema]},
   extraIngredientPrices: {type:[ExtraPriceSchema]},
   total:String

    
  }
);

export default mongoose.models.cartItem || mongoose.model("cartItem", Item);