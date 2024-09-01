import mongoose, {model, models, Schema} from "mongoose";
const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});
const Item = mongoose.Schema(
  {title :String,
    discription:String,
   image:String,
   price:Number,
   type:String,
   size:{type:[ExtraPriceSchema]},
   extraIngredientPrices: {type:[ExtraPriceSchema]}
   

    
  }
);

export default mongoose.models.menuItem || mongoose.model("menuItem", Item);