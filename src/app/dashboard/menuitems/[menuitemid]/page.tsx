
import { FC } from 'react'
import Menuitemchange from '@/components/menuitemchange'
import { useState,useEffect } from "react"
interface pageProps {
    params: {
        menuitemid: string
      }
}

const page: FC<pageProps> = ({params}) => {
    const { menuitemid } = params
   
    


  return <div>
    
    <Menuitemchange 
    menuitemid={menuitemid}
    />
   </div>
}

export default page