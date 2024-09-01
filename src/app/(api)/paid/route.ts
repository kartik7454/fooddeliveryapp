import { NextRequest ,NextResponse} from "next/server"
import  { connectToDB} from "../../../lib/connectDb.js"
import {Order} from "../../../lib/orders.js"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
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
            console.log(itemExists)
            return NextResponse.json({mssg: itemExists}, {status: 200})
            }
         if(!itemExists){
            
            return NextResponse.json({error: "not found"}, {status: 404})
            
         }
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400})
        
    }
    
   }





export async function PATCH (request: NextRequest,req:NextApiRequest,res:NextApiResponse){
   
     

    try{
        const body = await request.text()
       
        const myarray =body.split("--");
        
        await Order.findOneAndUpdate({_id:myarray[1]},{status:myarray[0]})
        return NextResponse.json({mssg: "hi"}, {status: 200})
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}