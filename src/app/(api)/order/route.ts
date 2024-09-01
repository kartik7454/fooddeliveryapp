import { NextRequest ,NextResponse} from "next/server"
import  { connectToDB} from "../../../lib/connectDb.js"
import {Order} from "../../../lib/orders.js"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import formidable from "formidable";


export async function GET (request: NextRequest){
    try {connectToDB()
        const itemExists  =await Order.find({});
        
        if(itemExists){
            
            return NextResponse.json({mssg: itemExists}, {status: 200})
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