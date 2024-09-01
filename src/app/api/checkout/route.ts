import { NextRequest } from "next/server";
import cartItem from "../../../lib/cart";
import {Order} from "../../../lib/orders";
import { authOptions } from "@/utils/authoptions"
var mongoose = require('mongoose')



import {getServerSession} from "next-auth";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
function myFunc(total:number, num:number) {
        return total + num ;
      }
export async function POST(request:NextRequest) {
  // mongoose.connect(process.env.MONGO_URL);
  
  const {cartitem, address} = await request.json();

  
  const session1 = await getServerSession(authOptions) as Session;
 const postalcode = Number( session1?.user?.postalcode);
  const email = session1?.user?.email;
  const phonenumber =   Number(session1?.user?.phonenumber);
  const name = session1?.user?.name;
  
  
  const orderDoc = await Order.create({
    email,
    name,
    postalcode,
    address,
    phonenumber,
    cartitem,
    stripeid:"",
    
  });

  const stripeLineItems = []; 
  
  for (const cartProduct of cartitem) {
         
      
      
     const productPrice = Number(cartProduct.total)
   
    




    const productName = cartProduct.name;
    stripeLineItems.push({
      quantity: 1,
      price_data: {
        currency: 'USD',
        product_data: {
          name: "ssss",
        },
        unit_amount: productPrice * 100,
      },
    })
  }

  const stripeSession = await stripe.checkout.sessions.create({
    line_items: stripeLineItems,
    mode: 'payment',
  
    customer_email: email,
    success_url: process.env.NEXTAUTH_URL + 'dashboard/orders/' + orderDoc._id.toString() + '?clear-cart=1',
    cancel_url: process.env.NEXTAUTH_URL + 'dashboard/orders/' + orderDoc._id.toString(),
    metadata: {orderId:orderDoc._id.toString()},
    payment_intent_data: {
      metadata:{orderId:orderDoc._id.toString()},
      
    },
    
  });
  var objectId =await  new mongoose.Types.ObjectId(orderDoc._id)
  const orderDoc2 = await Order.findByIdAndUpdate(objectId,{
    stripeid:stripeSession.id
  })
  

  // const id = session?.user?.id
  // var objectId = new mongoose.Types.ObjectId(id);
  // const event =  await cartItem.deleteMany({key:objectId})

  return Response.json([stripeSession.url,orderDoc._id]);
}