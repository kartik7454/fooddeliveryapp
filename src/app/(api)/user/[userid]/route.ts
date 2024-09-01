import { NextRequest ,NextResponse} from "next/server"

import { prisma } from '@/lib/prisma'
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import formidable from "formidable";
interface Props {
    params: {
userid: string
      }
}

export async function GET (request: NextRequest,Props:Props){
    try {
        const {params } = Props  
          const {userid } = params
        const users = await prisma.user.findUnique({
        where:{email:userid}
    })
        
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