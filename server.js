import express from "express"
import cors from "cors"
import { connectDB } from './config/db.js';
import saleRouter from "./routes/saleRoute.js";

//app config
const app = express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();

//API ENDS POINT
app.use("/api/sale", saleRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
//