
import { getUserSession } from '@/lib/session'
import Loading from "../loading"
import MenuComponent from "@/components/menuComponent"
import { Suspense } from 'react';

export default async function Menu() {
  const user = await getUserSession()
  
  return (
<div className=" bg-slate-100">
  
<h1 className='h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10'>Menu</h1>
  
<Suspense fallback={<Loading/>}><MenuComponent 
id={user.id}
/></Suspense>


</div>
    
    
  );
}
