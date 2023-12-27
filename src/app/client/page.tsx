"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"



 function Client(){

    const { data : session } = useSession({
        required  : true ,
        onUnauthenticated(){
            redirect("/api/auth/signin?callback=/client")
        }
    }) 

    return <>
    <div>
        <h1>Client Member</h1>
        <li>{ session?.user?.email }</li>
        <li>{ session?.user?.name }</li>
    </div>
    </>
}

export default Client