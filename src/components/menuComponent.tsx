"use client"
import { FC } from 'react'
import { useState,useEffect } from "react"
import PizzaItem from './MenuItem'
import Addtocartdiv from "@/components/addtocartdiv"
import toast, { Toaster } from 'react-hot-toast';
interface MenuProps {
  id:string
}

const MenuComponent: FC<MenuProps> =({id}) => {
  
  const [user, setuser] = useState<string>()
  const [menuitem, setmenuitem] = useState<Menuitem[]>([])
  const [visi, setvisi] = useState<boolean>(false)
  const [cartitem, setcartitem] = useState<Menuitem>()
  
  

    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                   
                const response = await fetch ('/fooditem')
                const json = await response.json()
                
                
        
                if(!response.ok){
                    console.log(json.error)  
                    
                   }
                if(response.ok){
                  setmenuitem(json.mssg)
                  console.log(json.mssg)
                  
          
                }
                }
                fetchtodo()
                
                
                },[])


                function addtocart(menuitem:Menuitem){
console.log(menuitem)
                 setcartitem(menuitem)
                 setvisi(true)
                }
                function setvisitofalse(){
                  
                                 
                                   setvisi(false)
toast.success("item added to cart")
                                  }
                
  return(<div>
    <Toaster />
{

menuitem.length > 0 ? (
  menuitem.map((item)=>{
    
    return(<PizzaItem
    menuitem={item}
    addtocart={addtocart}
   
    />)
    
  })
  ):null}
  
<div>



  {  cartitem!== undefined &&visi==true? (<Addtocartdiv
  menuitems={cartitem}
  id={id}
  setvisi={setvisitofalse}
  />):null }
  
</div>
    
  </div>) 
}

export default MenuComponent