import { NextRequest ,NextResponse} from "next/server"
import  { connectToDB} from "../../../../lib/connectDb.js"
import {Order} from "../../../../lib/orders.js"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
interface Props {
    params: {
orderid: string
      }
}

export async function GET (request: NextRequest,Props:Props){
    try {connectToDB()
 const searchParams= request.nextUrl.basePath
 console.log(searchParams)
        const {params } = Props
        const {orderid } = params
        const id =   new   mongoose.Types.ObjectId(orderid)
        const itemExists  =await Order.find({_id:id});
        
        if(itemExists){
            
            const session1 = await stripe.checkout.sessions.retrieve(
                itemExists[0].stripeid
              )
              if( session1.payment_status=="paid" ){const orderDoc2 = await Order.findByIdAndUpdate(id,{
                status:"paid"
              })}
              if( session1.payment_status=="unpaid" ){const orderDoc2 = await Order.findByIdAndUpdate(id,{
                status:"unpaid"
              })}
              const itemExists2  =await Order.find({_id:id})
              console.log(itemExists2)
              
            return NextResponse.json({mssg: itemExists2}, {status: 200})
            }
         if(!itemExists){
            
            return NextResponse.json({error: "not found"}, {status: 404})
            
         }
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400})
        
    }
    
   }





export async function POST (request: NextRequest,req:NextApiRequest,res:NextApiResponse){
   
     

    try{
        
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}