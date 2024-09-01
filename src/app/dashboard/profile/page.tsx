
import { FC } from 'react'
import Profile from '@/components/profile'

import { getServerSession } from 'next-auth'
import { authOptions } from "@/utils/authoptions"
interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
    const session = await getServerSession(authOptions)
      const user= session?.user as User
console.log()


  return <div className="mx-6 bg-slate-100 h-screen ">



<h1 className='h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10'>Profile</h1>
<Profile 
user ={user}/>

  </div>
}

export default page