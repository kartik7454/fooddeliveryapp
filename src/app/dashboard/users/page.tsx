"use client"
import Link from 'next/link'
import { FC } from 'react'
import { useState,useEffect } from "react"
import { isadmin } from '@/lib/isadmin'

import { redirect } from 'next/navigation'
interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {
    const [users, setusers] = useState<User[]>([])
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
             
            const response = await fetch ('/user')
            const json = await response.json()
            
            
    
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){
  console.log(json.mssg)
              setusers(json.mssg)
            const alo =  await isadmin()
             console.log(alo)
     if(alo === false){location.replace("http://localhost:3000/")}
            }
            }
            fetchtodo()
            
            
            },[])
  return <div>
     <h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10 mb-10">Users</h1><div className='h-screen relative left-1/3 '>
    
    {users?users.map((item)=>{return( <div className="bg-slate-300 mb-6 w-1/3  rounded-xl  h-11  pt-2 pl-5">
    <h1 className='inline-block mr-6  w-32 '>{item.name}</h1>
  <h1 className='inline-block  mr-6  w-52' >{item.email}</h1>
  
  <button className='bg-slate-300 rounded-lg h-7 w-10 border border-gray-500 '><Link href={"users/"+item.email}>edit</Link> </button>
  </div> )}):null}</div></div>
  
  
  
}

export default Page