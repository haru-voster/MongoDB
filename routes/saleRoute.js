import  express from 'express'
import { addSale } from '../controllers/saleController.js'
import multer from "multer"

const saleRouter = express.Router();

//image storage
const storage = multer.diskStorage({
    destination:"uploads", 
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)

    }
})
const upload  = multer({storage:storage})


saleRouter.post("/add",upload.single("image"), addSale)

//



export default saleRouter;