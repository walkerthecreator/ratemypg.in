import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { connect } from "@/config/dbConfig"
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
                console.log("setting token id as " , token.id)
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
} ;

export const getAuthSession = () => {
    return getServerSession(options)
}
        

