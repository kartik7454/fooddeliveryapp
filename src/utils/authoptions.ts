import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

 export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    
    
    async jwt({ token, profile,user }) {
      //this will triger while session
      console.log(user)
      if(token.address){const user1 = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      })
      token.name =user1?.name
      token.image =user1?.image
      token.admin =user1?.admin
      token.id = user1?.id
      token.phonenumber = user1?.phonenumber
      token.address = user1?.address
      token.postalcode = user1?.postalcode
   
    
    }
// this will activate when login
      if (profile) {
   
        const user1 = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        })
        
        if (!user1) {
         
          await prisma.user.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name,
              image:user.image,
              admin:true,
              address:"",
              phonenumber:0,
              postalcode:0
            },
            update: {
              name: profile.name,
             
            },
          })
        }
        token.name =user1?.name

        token.image =user1?.image
        token.admin =user1?.admin
        token.id = user1?.id
        token.phonenumber = user1?.phonenumber
        token.address = user1?.address
        token.postalcode = user1?.postalcode
      
      
       
      }

      




      return token
    },
    async session({ session, token }) {
     
      if (token) {
       // set value of session == jwt
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.image
        session.user.phonenumber = token.phonenumber
        session.user.address = token.address
        session.user.postalcode = token.postalcode
      }
    

      return session
    }
  },
}