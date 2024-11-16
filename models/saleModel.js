import mongoose  from "mongoose";

const saleSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},//number charged instead of string
    image: {type:String, required:true},
    category: {type: String, required: true},
   // itemName: { type: String, required: true },
    //quantity: { type: Number, required: true },
    //price: { type: Number, required: true },
    // Add more fields as needed

});
const Sale = mongoose.models.sale || mongoose.model("sale", saleSchema);

export default Sale;