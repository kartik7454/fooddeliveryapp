import { NextRequest ,NextResponse} from "next/server"
import  { connectToDB} from "../../../lib/connectDb.js"
import {Order} from "../../../lib/orders.js"
import { prisma } from '@/lib/prisma'
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import formidable from "formidable";


export async function GET (request: NextRequest){
    try {const users = await prisma.user.findMany()
        
        return NextResponse.json({mssg: users}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400})
        
    }
    
   }





export async function POST (request: NextRequest,req:NextApiRequest,res:NextApiResponse){
   
     

    try{
        
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}