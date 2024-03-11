"use client"
import axios from "axios"
import { useState , useEffect } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from "next/image"
import dateFormatter from "@/helper/DateFormatter"
import Link from "next/link"
import { pg } from "@/types/type"


const SinglePg = ({params} : { params : {id : string }} ) => {

    const [ pg , setPg ] = useState< pg | "" >("")

    // const { data : session } = useSession({
    //     required : true , 
    //     onUnauthenticated(){
    //         redirect('/api/auth/signin?callbackUrl=/pg')
    //     }
    // })

    const id = params.id


    useEffect(()=>{
        async function getData(){
            const res = await axios.post(`/api/pg/${id}`)
            const data = res.data
            setPg(data.data)
        }

        getData()

    } , [id])

    console.log("pg" , pg)

    return(
        <>

        <main className="flex justify-center min-h-[70vh] mt-20 w-5/6 gap-4 mx-auto">

        <div className="flex flex-col w-2/6 rounded-xl p-5 ">
            <div className="border-b-2 border-zinc-700 pb-10">
                <h1 className="text-3xl font-semibold">{pg?.name}</h1>
                <h3 className="mt-4"> Owner : <span className="font-semibold">{ pg?.owner }</span> </h3>
            </div>
            <div className="border-b-2 border-zinc-700 py-10">
                    <h2>Overall Ratings</h2>

            </div>
            <div className="pt-4">
                <h4 className="text">stayed at {pg?.name} ?</h4>
                <h2 className="mt-1 text-3xl font-semibold ">Add your Experince with them</h2>
            </div>
                <Link href={`/write-a-review/${id}`} className="btn-primary w-full text-center mt-6 mx-auto">write a review</Link>
        </div>

        <div className="p-5 w-4/5 border border-zinc-700 rounded-xl mx-auto flex flex-col justify-between">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Read review of { pg?.name }</h1>        
                {/* <Link href={`/write-a-review/${id}`} className="btn-primary">write a review</Link> */}
            </div>


            <div>
{/* 
                {
                    pg.ratings?.map((item) => {
                        return <h1>item.name</h1>
                    })
                } */}

            </div>


            <div className="flex items-center justify-between gap-4">

                <div className="w-fit p-1 px-4  bg-zinc-900 border border-zinc-600 flex items-center gap-3 rounded-xl">
                        <Image className="rounded-full" src={ pg?.postedBy?.picture } alt="user" width="36" height="36"></Image>
                        <h4>{ pg?.postedBy?.email }</h4>
                </div>

                <div>
                    {
                        (pg) ?
                        <p className="text-indigo-700 bg-indigo-200 font-semibold rounded-md w-fit p-1 text-xs "> Added on { dateFormatter(pg?.createdAt) }</p>
                        :
                        "loading..."   
                    }
                </div>
            </div>
        </div>

        
        </main>

        </>
    )
} 

export default SinglePg