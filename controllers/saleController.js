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

export {addSale}