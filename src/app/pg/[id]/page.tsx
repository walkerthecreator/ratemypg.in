"use client"
import axios from "axios"
import { useState , useEffect } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const SinglePg = ({params} : { params : {id : string }} ) => {

    const [ pgData , setPgData ] = useState("")
    const { data : session } = useSession({
        required : true , 
        onUnauthenticated(){
            redirect('/api/auth/signin?callbackUrl=/pg')
        }
    })

    console.log(session?.user)

    const id = params.id

    useEffect(()=>{
        async function getData(){
            const res = await axios.post(`/api/pg/${id}` , {id})
            const data = res.data
            console.log(data)
        }

        getData()

    } , [id])

    return(
        <>
        <div>
            <h1>Single Pg </h1>
            {id}
        </div>
        </>
    )
} 

export default SinglePg