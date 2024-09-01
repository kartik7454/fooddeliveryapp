
import { FC, Suspense } from 'react'
import Dashboardmenuitemcomponent from "@/components/dashboardmenuitemcomponent"
import Link from "next/link";
import Loading from "../../loading"



interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='bg-slate-100'>
   
<h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10 mb-10">Menu Items</h1>
    
    <Link href="/dashboard/addmenuitem"><button type="button" className="text-gray-600  w-1/2 relative left-1/4 text-xl font-bold font-sans border border-slate-400 bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-slate-100 dark:hover:bg-blue-100 object-center   ">Add New </button></Link>

<Suspense fallback={<Loading/>}>{<Dashboardmenuitemcomponent/>}</Suspense>

  </div>
}

export default page