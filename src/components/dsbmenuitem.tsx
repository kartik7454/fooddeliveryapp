
import { FC } from 'react'
import Link from "next/link";

interface dsbmenuitemProps {
    menuitem:Menuitem
}
async function delay(){ await new Promise(resolve=>setTimeout(resolve,0))}
const Dsbmenuitem: FC<dsbmenuitemProps> = async({menuitem}) => {
 await delay()
  return (<>
  <Link
        
        href={'/dashboard/menuitems/'+menuitem._id}
      >
        


        <div  className="bg-gray-200 h-64 w-96 my-10 ml-14 mb-11 inline-grid rounded-xl">
    
    <div className="ml-8 mt-5"> <img
    className='h-44 w-80 object-cover rounded-lg'
  src= {"/images/"+menuitem.image} 
 
  alt={"img"}
  
  
  
  /></div>
  <h1 className='text-center font-bold text-lg italic'>{menuitem.title}</h1>
  
 
  
  </div>
      </Link>
      </>
  
  
  
  )
    
  
}

export default Dsbmenuitem