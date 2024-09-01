import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import { NextRequest } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
                
    console.log("hii")
    console.log(body)



    let arr: number[] = [];
    body.item.cartitem.map((item:any)=>{arr.push(Number(item.total))})
    // const session1 = await stripe.checkout.sessions.retrieve(
    //     "cs_test_a166c33v6R6hPl72FlwTTPU6jIZvKO8VYjobwBh3TncsE1Ow893NAPEd0J"
       
    //   )
    //   console.log("aloooo")
    //   console.log(session1)

    
     const totalprice= arr.reduce((total:number, num:number) =>{
        return total + num ;
      })
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'kb848067@gmail.com',
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        })

        const mailOption = {
            from: '',
            to: "kb848067@gmail.com",
            subject: "new order ",
            html: `

        ${
            
        
        body.item.cartitem.map((item:any)=>{return(`<p> title:${item.title}</p>
            <p>size:${item.size[0].name}  price:$${item.size[0].price}</p>
           <p> ${item.extraIngredientPrices.map((item:any)=>{return(` ${item.name} $${item.price}`)})}</p>
           <p>total:${item.total}</p > 
            
            `
            
        ) })  }
        <hr>
${`<li>cart total: ${totalprice}</li>`}
         
        `
        }

        //  await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}