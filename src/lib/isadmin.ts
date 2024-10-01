"use server"
import { User } from 'next-auth'
import { getUserSession } from './session'
import { prisma } from '@/lib/prisma'


export const isadmin = async (): Promise<boolean|undefined|null> => {
  const session =  await getUserSession()
  const users = await prisma.user.findUnique({
    where:{email: session?.email||""}
})

  // if (!authUserSession) throw new Error('unauthorized')
  return users?.admin
}