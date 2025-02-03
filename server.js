import express from "express"
import cors from "cors"
import { connectDB } from './config/db.js';
import { userInfo } from "os";
import userRouter from "./routes/userRouter.js";
import saleRouter from "./routes/saleRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config
const app = express()
const port = process.env.PORT || 4000;

//exceeding limit
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
//middleware
app.use(express.json({ limit: '100mb' }))
app.use(cors())
//db connection
connectDB();

//API ENDS POINT
app.use("/api/sale", saleRouter)
app.use("/image", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
  
});
//