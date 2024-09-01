import { NextRequest ,NextResponse} from "next/server"
import  { connectToDB} from "../../../lib/connectDb.js"
import cartItem from "../../../lib/cart.js"
import {  NextApiRequest, NextApiResponse } from "next";

interface Props {
    params: {
cartid: string
      }
}
export async function GET (request: NextRequest,Props:Props){
    try {connectToDB()
        const {params } = Props
        const {cartid } = params
        
      
       
        const itemExists  =await cartItem.find({key:cartid});
        
        if(itemExists){
            
            return NextResponse.json({mssg: itemExists}, {status: 200})
            }
         if(!itemExists){
            
            return NextResponse.json({error: "not found"}, {status: 404})
            
         }

       
    } catch (error) {
        
    }
    
    
    
   }





export async function POST (request: NextRequest,req:NextApiRequest,res:NextApiResponse){
   
     

    try{
        const body = await request.json()
        var {key,title , discription,image,price,type,size,extraIngredientPrices,total} = body
        
        const event =  await cartItem.create({key,title , discription,image,price,type,size,extraIngredientPrices,total})
       
        return NextResponse.json({mssg: body}, {status: 200})
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}