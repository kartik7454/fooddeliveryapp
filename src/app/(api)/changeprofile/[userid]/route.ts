import { NextRequest ,NextResponse} from "next/server"
import  { connectToDB} from "../../../../lib/connectDb.js"

import { prisma } from '@/lib/prisma'

var mongoose = require('mongoose');
interface Props {
    params: {
userid: string
      }
}
export async function GET (request: NextRequest,Props:Props){
    try {
    } catch (error) {
        
    }
    
    
    
   }





export async function PATCH (request: NextRequest,Props:Props){
   
     

    try{
        connectToDB()
      
        const {params } = Props
        const {userid } = params
        const body = await request.json()
         
       const  { name,email,image,phonenumber,admin,id,postalcode,address}=body
       const updateUser = await prisma.user.update({
        where: {
         email:email
          
        },
        data: {
          name:name,
          address:address,
          postalcode:Number(postalcode) ,
          phonenumber:phonenumber
        },
      })
       
      
       
        return NextResponse.json({mssg: body}, {status: 200})
    }
     catch(error ){return NextResponse.json({error: error}, {status: 400})}



    
}