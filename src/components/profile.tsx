"use client"
import { getToken } from 'next-auth/jwt'
import { getCsrfToken } from 'next-auth/react'
import { FC } from 'react'
import { useState,useEffect } from "react"
interface profileProps {
  user:User
}

const Profile: FC<profileProps> = ({user}) => {
    const [form, setform] = useState<User>({
        name: user.name,
        email: user.email,
        image: user.image,
        phonenumber:user.phonenumber,
        admin:user.admin,
        id: user.id,
        postalcode:user.postalcode,
        address:user.address
      })



 async function handelsubmit(e:any){
    e.preventDefault()
   
    const response = await fetch('/changeprofile/'+form.id,{
        method:"PATCH",
        body :  JSON.stringify(form)  //convert to json from object
        
    })
    const json = await response.json()
    if (!response.ok){
  console.log(json.error)

   
    }
    if (response.ok){
      



}
}


  return <div className="absolute left-1/3 ml-11 w-96 ">

  <form>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div className=''>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> name</label>
              <input type="text" onChange={   (e)=>  {form.name=   e.target.value } } id="first_name" className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:defdefaultValue-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500  " defaultValue={form.name}  />
          </div>
          <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">address</label>
              <input type="text" id="last_name" onChange={   (e)=>  {form.address=   e.target.value } } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-slate-100 dark:border-gray-600 dark:defdefaultValue-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"defaultValue={form.address} />
          </div>
          <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">postal code</label>
              <input type="text" id="company"  onChange={   (e)=>  {form.postalcode=  Number(e.target.value)  } } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-slate-100 dark:border-gray-600 dark:defdefaultValue-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"defaultValue={form.postalcode}  />
          </div>  
          <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
              <input type="tel" id="phone"  onChange={   (e)=>  {form.phonenumber=  Number(e.target.value)  } } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-slate-100 dark:border-gray-600 dark:defdefaultValue-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"defaultValue={form.phonenumber}   />
          </div>
         
          
      </div>
       
       
     
      <button type="submit" onClick={(e)=>{handelsubmit(e);alert("changes saved")}} className="h-10 w-96 focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-sm px-5  me-2  dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-900">Save</button>
  </form>
  
    </div>
}

export default Profile