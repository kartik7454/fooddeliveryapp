import { FC } from 'react'
import { useState,useEffect } from "react"
import Link from "next/link";
import { getUserSession } from '@/lib/session'
interface dsblayoutProps {
  
}

const Dsblayout: FC<dsblayoutProps> = ({}) => {
    const [users, setusers] = useState<User>()
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
               const session = await   getUserSession()
                const response = await fetch ('/user/'+session.email)
                const json = await response.json()
                
                
        
                if(!response.ok){
                    console.log(json.error)  
                    
                   }
                if(response.ok){
      console.log(json.mssg)
                 
                  setusers(json.mssg)
                
                 
         
                }
                }
                fetchtodo()
                
                
                },[])
  return <div>


<div className="flex mx-auto gap-2 tabs justify-center flex-wrap py-6">
      <Link 
        
        href={'/dashboard/profile'}
      >
       <button type="button" className="text-white font-bold  text-base  rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 ">Profile</button>
      </Link>
      {users?.admin?( <>
          
          <Link
            href={'/dashboard/menuitems'}
            
          >
           <button type="button" className="text-white font-bold  text-base  rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 ">Menu Item</button>
          </Link>
          <Link
            
            href={'/dashboard/users'}
          >
            <button type="button" className="text-white font-bold  text-base  rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 ">User</button>
          </Link>
        </>):null
       
      }
      <Link
        
        href={'/dashboard/orders'}
      >
        <button type="button" className="text-white font-bold  text-base  rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 ">Orders</button>
      </Link>
    </div>
  </div>
}

export default Dsblayout