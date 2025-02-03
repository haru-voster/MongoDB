import mongoose, { mongo } from "mongoose";

const  orderSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    items:{type:Array, required:true},
    amount:{type:Number, required:true},
    address:{type:String, required:true},
    phone:{type:Number, required:true},
    status:{type:String, default:"Sale processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean, default:false},

})

const orderModel = mangoose.models.order || mangoose.model("order", orderSchema);
export default orderModel;