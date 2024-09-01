"use client"
 import { FC } from 'react'
 import { signOut } from 'next-auth/react'
 import { toast } from 'react-hot-toast'

 interface logoutButtonProps {
   
 }
 
 const LogoutButton: FC<logoutButtonProps> = ({}) => {
      async function handleclick(){
        try {
            await signOut()
          } catch (error) {
            toast.error('There was a problem signing out')
          } 

     }
   return <div><button onClick={handleclick} type="button" className="text-white font-bold  text-base bg-red-500 hover:md:dark:hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-5000 dark:focus:ring-blue-100">logout</button></div>
 }
 
 export default LogoutButton


