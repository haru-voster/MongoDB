import { error} from "console";
import saleModel from "../models/saleModel.js";
import fs from 'fs'


//add sale item
const addSale = async (req, res) =>{

    let image_filename = `${req.file.filename}`;
    const sale = new saleModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await sale.save();
        res.json({success:true, message:"Sale item added"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error occurred"})
    }
}

//all sale list
const listSale = async(req,res)=>{
    try {
        const sales = await saleModel.find({});
        res.json({success:true, data:sales})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})

    }
}

export {addSale, listSale}