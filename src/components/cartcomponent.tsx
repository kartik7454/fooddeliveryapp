"use client"

import { FC } from 'react'
import { useState,useEffect } from "react"
import { getUserSession } from '@/lib/session'
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


interface CartcomponentProps {
  user:User|undefined
}

const Cartcomponent: FC<CartcomponentProps> = ({user}) => {
  
  const [carttotal, setcarttotal] = useState<number>()
    const [cartitem, setcartitem] = useState<Cartitem[]>([{
      _id:"",
      key:"",
  title: "",
  discription: "",
  image: "",
  price: 0,
  type: "",
  file:null,
  size:[{name:"",price:0}]   ,
  extraIngredientPrices:  [{name:"",price:0}],
  total:0
  }])
    

    useEffect(() => {
    
      let arr: number[] = [];

     
      cartitem.map((item)=>{arr.push(Number(item.total))     })
      
      function myFunc(total:number, num:number) {
        return total + num ;
      }
      if(arr.length>0){setcarttotal(arr.reduce(myFunc))}
    
    
    
    
    }, [cartitem])








    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                   const user = await getUserSession()
                const response = await fetch ('/addtocart/'+user.id)
                const json = await response.json()
                
                
        
                if(!response.ok){
                    console.log(json.error)  
                    
                   }
                if(response.ok){
console.log(json.mssg)
                  setcartitem(json.mssg)
                
                 
         
                }
                }
                fetchtodo()
                
                
                },[])
  
              async  function handelclick(id:string){
                
  const newarr = cartitem.filter((item)=>{return item._id !== id })
setcartitem(newarr)





                const response = await fetch('/addtocart/'+id,{
                  method:"POST",
                  body :  JSON.stringify(id ) //convert to json from object
                  
                })    
                const json = await response.json()
                if (!response.ok){
                console.log(json.error)
                
                
                }
                if (response.ok){
                }
                
                
              }
 
              async function proceedToCheckout(ev:any) {
                ev.preventDefault();
                console.log(cartitem)
                console.log(ev)
            const address = user?.address
            const postalCode = user?.postalcode
                const promise = new Promise<void>((resolve, reject) => {
                  fetch('/api/checkout', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                      address ,
                      postalCode,
                      cartitem 
                    
                    }),
                  }).then(async (response) => {
                    if (response.ok) {
                      console.log()
                      resolve();
                      
                      
                      
                      //use id to get order 
                    const[link,id]=  await response.json()


                    const response1 = await fetch('/order/'+id)
                    
                    const json = await response1.json()
const item = json.mssg[0]




                    fetch('/api/sendEmail', {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                          
                      item
                        
                        }),
                      })
                    window.location = link;
                    } else {
                      reject();
                    }
                  });
                });
            
                
              }

    return(<div className='h-screen bg-slate-100' ><h1 className="h-28 bg-slate-100 text-5xl font-bold font-sans text-red-500 text-center italic pt-10 ">Cart</h1>
      
      
      {cartitem.length > 0 ?<div><div>


      
      <div className=' w-1/3 inline-block  absolute top-64 left-80 '>


{cartitem.length > 0 ? (cartitem.map((item)=>{return <div >
      <div className="inline-block  ">
        <img className='h-24 w-40 object-cover inline rounded-lg' src={"/images/"+ item.image}></img>
        </div>
      
      <div className="inline-block mx-5   w-36">
        <p className="text-xl font-semibold font-sans">{item.title}</p>
      <p className="text-base font-medium font-sans">{item.size[0].name+ " $"+item.size[0].price}</p>
      {item.extraIngredientPrices.map((item)=>{return <h1 className='text-base font-medium font-sans'>{item.name +" $"+item.price}</h1>})}
      </div>
      <div className="inline-block bg-slate-100" ><h1 className='text-lg font-bold font-sans'>{" Total $"+item.total}</h1></div>
      <button onClick={()=>{handelclick(item._id)}} className="inline-block bg-slate-100 ml-2" >  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
</svg></button>
      <hr/>
     </div>})):null}
     
<h1 className='text-xl font-semibold font-sans mt-5'>{ " cart total $"+carttotal}</h1>
    </div>
    
    
    
    <div className=' inline-block absolute top-64 right-64 bg-slate-200 w-72 h-80  rounded-xl
    '>

<form onSubmit={ (e)=>{proceedToCheckout(e)} } className="w-60 mx-auto my-5">
  <div className="relative z-0 w-full mb-5 group">
      <input   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={user?.name}  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input  name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={user?.address}  />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input  name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={user?.postalcode}  />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">postal code</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input  name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={user?.phonenumber}  />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> phone number</label>
  </div>
 
  <button type="submit" className="text-white w-64 bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800">Pay</button>
</form>

    </div></div></div>:<h1 className="h-28 bg-slate-100 text-2xl font-bold font-sans text-black text-center italic pt-10 ">No item in cart</h1>}
      

    </div>) 



}

export default Cartcomponent