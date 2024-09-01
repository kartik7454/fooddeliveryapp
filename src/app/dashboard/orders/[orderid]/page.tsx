"use client"
import { FC } from 'react'

import { isadmin } from '@/lib/isadmin'
import { useState,useEffect } from "react"

interface pageProps {
  params: {
    orderid: string
          }
}

const Page: FC<pageProps> = ({params}) => {
  const [carttotal, setcarttotal] = useState<number>()
  const [cartitem, setcartitem] = useState<Orders[]>(
   
  )
  const [isitadmin, setisadmin] = useState<boolean|null|undefined>(
   false
  )
  useEffect( ()=>{
    const fetchtodo  = async ()=>{
      
      
            const response = await fetch ('/order/'+params.orderid)
            const json = await response.json()
             
    
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){
console.log(json.mssg)
               setcartitem(json.mssg)
           total(json.mssg)
             const alo =   await isadmin()
            setisadmin(alo)
     
            }
            }
            fetchtodo()
            
            
            },[])
            function total (cartitemnew:Orders[])  {
    
               let arr: number[] = [];
          
             
              cartitemnew[0].cartitem.map((item)=>{arr.push(Number(item.total)) 
              })
              function myFunc(total:number, num:number) {
                return total + num ;
              }
              setcarttotal(arr.reduce(myFunc))
    
            
            
            }



             
  return(   <div className='h-screen'><h1 className="h-28 bg-slate-100 text-5xl font-bold font-sans text-red-500 text-center italic pt-10 ">your order</h1>
  <h1 className='text-xl font-semibold font-sans text-center'>thanks for ordering</h1>
  
  <h1 className='text-xl font-semibold font-sans text-center'>your order is on the way</h1>

  <div >

<div className='w-1/3 inline-block  absolute top-96 left-80 '>
{cartitem? (cartitem[0].cartitem.map((item)=>{return <div className='mt-5' >
      <div className="inline-block  ">
        <img className='h-24 w-40 object-cover inline rounded-lg' src={"/images/"+ item.image}></img>
        </div>
      
      <div className="inline-block mx-5  w-40     ">
        <h1 className="text-xl font-semibold font-sans  ">{item.title}</h1>
      <h1 className=" text-base font-medium font-sans">{item.size?.name+ " $"+item.size.price}</h1>
      {item.extraIngredientPrices.map((item)=>{return <h1>{item.name +" $"+item.price}</h1>})}
      </div>
      <div className="inline-block bg-slate-100" ><h1 className='text-lg font-bold font-sans'>{" Total $"+item.total}</h1></div>
      
      <hr/>
     </div>})):null}
     <h1 className='text-xl font-semibold font-sans mt-5'>{ " cart total $"+carttotal}</h1>
     

</div>



<div className='inline-block absolute top-96 right-64 bg-slate-200 w-72 h-72  rounded-xl '>

<form  className="w-60 mx-auto my-5">
<div className="relative z-0 w-full mb-5 group">
<input  name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   value={cartitem?cartitem[0].name:""}   />
<label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={cartitem?cartitem[0].address:""} />
<label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> address</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input  name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={cartitem?cartitem[0].postalCode:""}  />
<label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">postal code</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input  name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={cartitem?cartitem[0].phonenumber:""} />
<label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone number</label>
</div>


</form>

</div>

</div>

  </div>)
}

export default Page