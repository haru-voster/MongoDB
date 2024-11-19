import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};

//mongodb+srv://haroun:8080@cluster0.fhstp.mongodb.net/