
"use client"

import { FC } from 'react'
import { isadmin } from '@/lib/isadmin'
import { useState,useEffect } from "react"
interface pageProps {
    params: {
        userid: string
      }
}

const Page: FC<pageProps> = ({params}) => {
  const [users, setusers] = useState<User>()
 
  

    const { userid } = params

    useEffect( ()=>{
      const fetchtodo  = async ()=>{
               
              const response = await fetch ('/user/'+userid)
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



               async function handlechange(e:any){
               


                let alo =userid+"--"+e.target.checked
                 
                const response = await fetch('/isadmin',{
                  method:"POST",
                  body : alo,
                  headers: {
                    "Content-Type": "text/html",
                  }

                  
              })
              const json = await response.json()
              if (!response.ok){
            console.log(json.error)
          
             
              }
              if (response.ok){
                
                const alo =  await isadmin()
                console.log(alo)
        if(alo === false){location.replace("http://localhost:3000/")}
          
          
          }


              
console.log(e.target.checked)


              }
  return <div className='h-screen text-center bg-slate-100 mt-10'>
    
    <div className="  leading-5 ">
    <h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt- mb-10">User</h1>
    <img src= {users?.image} className='relative left-1/3 ml-36 mb-10 h-40 w-40'  ></img>
      <h1 className='pb-5 text-xl font-bold font-sans'>Name : { users?.name }</h1>
  <h1 className='pb-5 text-xl font-bold font-sans'>  Email : {users?.email }</h1>
  
  <h1 className='pb-5 text-xl font-bold font-sans'> Address : {users?.address }</h1>
  
  <h1 className='pb-5 text-xl font-bold font-sans'> Phonenumber : {users?.phonenumber }</h1>
  <h1 className='pb-5 text-xl font-bold font-sans'> Postalcode : {users?.postalcode }</h1>
<h1 className='inline text-xl font-bold font-sans'>isAdmin{}</h1>
  <input onChange={async(e)=>{  handlechange(e);alert("value changed to "+e.target.checked)}} type='checkbox' className=''  ></input>
  </div>
    
    
  </div>
}

export default Page