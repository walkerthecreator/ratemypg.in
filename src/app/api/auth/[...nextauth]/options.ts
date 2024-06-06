// import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth"
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/user"

declare module "next-auth"{
    interface Session extends DefaultSession{
        user : {
            id : string ,
        } & DefaultSession['user']
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        id : string ,
    }
}

export const options : NextAuthOptions = { 
    session : {
        strategy : "jwt"
    } ,
    callbacks : {
        jwt : async ({ token }) => {
            let user = await User.findOne({ email : token.email  })

            if(user) {
                token.id = user._id
            }
            else{
                user = await User.create({ 
                    username : token.name ,
                    email : token.email ,
                    picture : token.picture ,
                    googleAuth : true  
                })
                token.id = user._id
            }
            return token
        }, 

        session : ({ session , token }) => {
            if(token){
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email 
            }

            return session
        }
    },
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string ,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET as string ,
        }) 
    ] ,
    pages : {
        signIn : "/auth/signin"
    }
} ;

export const getAuthSession = () => {
    return getServerSession(options)
}
        

