"use client"

import { FC , Suspense} from 'react'
import { useState,useEffect } from "react"
import { isadmin } from '@/lib/isadmin'
import Loading from "../../loading"
import Orders from '@/components/orders'
interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {
  const [orders, setorders] = useState<Orders[]>([])
  useEffect( ()=>{
  const fetchtodo  = async ()=>{const alo =  await isadmin()
    
    

           if(alo===true){const response = await fetch ('/order')
          const json = await response.json()
          
          
  
          if(!response.ok){
              console.log(json.error)  
              
             }
          if(response.ok){
console.log(json.mssg)
            setorders(json.mssg)
          
           
   
          }}
          if(alo===false){const response = await fetch ('/indorder')
            const json = await response.json()
            
            
    
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){
  console.log(json.mssg)
              setorders(json.mssg)
            
             
     
            }}
          
          }
          fetchtodo()
          
          
          },[])
  return <div className='w-2/3 relative pb-16 left-60'>
    <h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10 mb-10">Orders</h1>
   <Suspense fallback={<Loading/>}>
   <Orders
   orders={orders}/>
   </Suspense>
   
    
  </div>
}

export default Page