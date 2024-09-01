import { NextRequest ,NextResponse} from "next/server"
import { prisma } from '@/lib/prisma'
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { stringify } from "querystring";

import { getUserSession } from '../../../lib/session'

import { Order } from '../../../lib/orders'
interface Props {
    params: {
orderid: string
      }
}

export async function GET (request: NextRequest,Props:Props){
    try {
        const session =  await getUserSession()

        const itemExists  =await Order.find({email:session.email});

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





export async function POST (request: NextRequest,req:NextApiRequest,res:NextApiResponse){
   
     

    try{
      
        const body = await request.text()
        const myArray = body.split("--");
        console.log( decodeURIComponent(myArray[0]))
         
let bhau = false
        if(myArray[1] == "true"){
bhau = true
        }
        const updateUser = await prisma.user.update({
            where: {
              email:decodeURIComponent(myArray[0]),
            },
            data: {
              admin: bhau ,
            },
          })
          
          return NextResponse.json({mssg: "hii"}, {status: 200})
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}