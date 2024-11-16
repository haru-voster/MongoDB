import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://haroun:8080@cluster0.fhstp.mongodb.net/').then(()=>console.log("DB CONNECTED"));

} 