"use client"
import { FC } from 'react'
import { useState,useEffect } from "react"
import Dsbmenuitem from './dsbmenuitem'
import { isadmin } from '@/lib/isadmin'
interface dashboardmenuitemcomponentProps {
  
}

const Dashboardmenuitemcomponent: FC<dashboardmenuitemcomponentProps> = ({}) => {
    const [menuitem, setmenuitem] = useState<Menuitem[]>([])
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
         
                const response = await fetch ('/fooditem')
                const json = await response.json()
                
                
        
                if(!response.ok){
                    console.log(json.error)  
                    
                   }
                if(response.ok){
                  setmenuitem(json.mssg)
                  const alo =  await isadmin()
                  
          if(alo === false){location.replace("http://localhost:3000/")}
          
                }
                }
                fetchtodo()
                
                
                },[])
  return <div>
    
    {menuitem.length > 0 ? (
  menuitem.map((item)=>{return(<Dsbmenuitem
    menuitem={item}
    
    />)
    
  })
  ):null}
  </div>
}

export default Dashboardmenuitemcomponent