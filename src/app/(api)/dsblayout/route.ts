import { NextRequest ,NextResponse} from "next/server"

import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
interface Props {
    params: {
orderid: string
      }
}

export async function GET (request: NextRequest,Props:Props){
    try {
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400})
        
    }
    
   }





export async function POST (request: NextRequest,req:NextApiRequest,res:NextApiResponse){
   
     

    try{
        console.log("kd")
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}