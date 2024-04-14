import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google" ;
import { connectToDb } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.googleId,
            clientSecret:process.env.googleKey,
        })
    ],

    async session({session}){
        const sessionUser = await User.findOne({
            email: session.user.email,
          });
    
          session.user.id = sessionUser._id.toString();
          return session
    },

    async signIn({profile}){
        try {
            await connectToDb();
          //check if user already exist.
          const userExist = User.findOne({email:profile.email}) ;

          //if not create a new user.
          if(!userExist){
            User.create({
                email:profile.email,
                username:profile.login,
                image:profile.picture,
            })
          }

          return true ;
        } catch (error) {
            return false ;
        }
    },
})

export {handler as GET , handler as POST} ;
