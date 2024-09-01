
import { FC } from 'react'
import { useState,useEffect } from "react"


interface pizzaItemProps {
  menuitem:Menuitem
  addtocart:Function
}

const PizzaItem: FC<pizzaItemProps> = ({menuitem,addtocart}) => {


  

  function handelclick(menuitem:Menuitem){
addtocart(menuitem)

  }
  return(
  <div className="bg-gray-200 h-96 w-96 my-10 ml-14 mb-11 inline-grid rounded-xl">
    
    <div className="ml-8 mt-5 rounded-lg">
      <img
    className='h-40 w-80 object-cover rounded-lg'
  src= {"/images/"+menuitem.image} 
 
  alt={"img"}
  
  
  
  /></div>
  <h1 className='text-center font-bold text-lg font-sans italic'>{menuitem.title}</h1>
 
  <p className='ml-10  w-80 break-words text-base font-medium bg-slate-1200 min-h-20 max-h-20 mb-5' >{menuitem.discription}</p>
  <button type="button" onClick={ ()=>{handelclick(menuitem)} } className=" h-10 focus:outline-none ml-3 mb-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-sm px-5  me-2  dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-900">Add to Cart ${menuitem.price}</button>
  </div>


  
  )
}

export default PizzaItem