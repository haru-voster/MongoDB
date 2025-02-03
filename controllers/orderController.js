import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing uer orders
const placeOrder = async (req, res)=>{
   const reactWeb_url = "https://localhost:3000"
    try{
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
            phone:req.body.phone
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_date:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_name:item.price*100*80//for dolars
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment", 
            success_url:`${reactWeb_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${reactWeb_url}/verify?success=true&orderId=${newOrder._id}`,

        })
        res.json({success:true, session_url:session.url})
    }catch (error){
        console.log(error);
        res.json({success:false, message:"Error"})
    }

}
const verifyOrder =  async (req, res)=>{
     const {orderId, success} = req.body;
     try{
        if (success=="true"){
            await orderModel.findByIdAndUpdate(orderId, {payment:true});
            res.json({success:true, message:"paid successfully"})
        }
        else{
            await orderModel.findByIdAndUpdate(orderId);
            res.json({success:false, message:"Not paid"})
        }
     }catch (error){
        console.log(error);
        res.json({success:false, message:"error"})
    }
}
export {placeOrder, verifyOrder}