

import { getServerSession } from 'next-auth'
import { authOptions } from "@/utils/authoptions"

import Cartcomponent from "@/components/cartcomponent"
interface pageProps {
  
}

export default async function Cart(){
  
  const session = await getServerSession(authOptions)
 const user = session?.user as User
    





  return <div className='h-screen'><Cartcomponent
  user={user}
  />
  </div>
}
