"use client"
import  SkeletonDemo  from "@/components/SkeletonPg"
import { pg } from "@/types/type"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
interface pgType{
    pg : pg ,
    reviewsCount : number ,
}

interface Accom{
    createdAt: string;
    location: string;
    name: string;
    owner: string;
    postedBy: string;
    reviews: string[];
    type: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

interface pgObj {
    pgs : Accom[] ;
    reviewsCount : 9 ;
}


 function Pg(){

    const [ loading , setLoading ] = useState(false)
    const [ pg , setPg ] = useState<pgObj | undefined >()
    const [count , setCount ] = useState({ pg : "" , reviews : "" })
    const [ show , setShow ] = useState(false)
 
    async function fetchData(){
        try{
            setLoading(true)
            const response = await axios.get('/api/pg')
            setPg(response.data)
            console.log("pg" , response.data)
            setCount({ pg : response.data.pgs.length , reviews : response.data.reviewsCount })
        }
        catch(err){
            console.log("can't get data from server")
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    } , [])

    return <>
        <div className="md:mt-16 pt-10 font-satoshi overflow-hidden">
           
            <div className="w-4/5 mx-auto">
            <h1 className="text-4xl mt-5 font-semibold text-center">Reveiws Pg or Room</h1>

            {/* <div className="flex justify-end mx-auto mt-10">

                <div className="flex gap-2 relative">
                    <button className="bg-zinc-800 p-2 px-4 rounded-md border border-zinc-600" onClick={()=>setShow(!show)}>filter</button>
                    <button className="bg-zinc-800 p-2 px-4 rounded-md border border-zinc-600">sort</button>

                    <div className={"transition-transform bg-zinc-800 h-40 rounded absolute top-14 right-0 w-96 border border-zinc-600 " + ((show) ? "-translate-y-2" : "hidden")}>

                    </div>
                </div>
            </div>  */}
            

            <div className="flex flex-col md:flex-row justify-between mt-10 gap-4">
                <div className="flex flex-col items-center w-full md:w-4/6  max-h-[800px] overflow-y-auto">

                { 
                    loading 
                    &&  
                    <div className="mt-10 flex flex-col gap-10">
                        <SkeletonDemo/>
                        <SkeletonDemo/>
                        <SkeletonDemo/>
                    </div>
                }
                    {
                        (pg != null ) 
                        && 
                        pg.pgs?.map((item : any )=>{   
                            return <>
                            <Link href={`/pg/${item._id}`} className="flex p-5 py-8 border-b-2 w-full md:w-4/5 border-zinc-600 hover:bg-zinc-900 cursor-pointer">
                                    <div className={"h-16 w-16 text-center pt-4 text-lg font-semibold md:rounded " + (item.type == "pg" ? "bg-blue-200 text-blue-700" : "bg-purple-200 text-purple-700")  }>{item.type}</div>
                                    <div className="p-2 w-full gap-3 ms-2">
                                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                                        <div className="flex justify-between text-sm text-zinc-400 font-medium">
                                            <p >Owner : { item.owner }</p>
                                            <div className="text-sm text-right flex gap-1">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                                </span>
                                                 {item.location}
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                            </> 
                        })
                    }

                </div>
                <aside className="bg-zinc-900 font-satoshi border border-zinc-700 w-full md:w-2/6 p-10 rounded-lg h-[500px]">
                    <div className="w-full">
                        <h2 className="font-extrabold text-2xl mb-2"> can&apos;t find your Pg?</h2>
                        <Link href="/pg/add-new-pg" >
                            <button className="btn-primary m-0 w-full ">
                            Add Your Pg
                            </button>
                        </Link>
                    </div>

                    <hr className="my-4 border border-zinc-600"/>

                    <div className="py-5">
                        <h2 className="text-gray-400 text-xl font-semibold font-satoshi">Reviews</h2>
                        <p className="text-3xl font-extrabold">{ count?.reviews } <span className="text-gray-400 font-medium text-sm">Total reviews given</span> </p>
                    </div>

                    <hr className="my-4 border border-zinc-600"/>

                    <div className="py-5">
                    <h2 className="text-gray-400 text-xl font-semibold font-satoshi">Pg</h2>
                        <p className="text-3xl font-extrabold">{ count?.pg } <span className="text-gray-400 font-medium text-sm">Total Pg Added</span> </p>
                    </div>

                </aside>


                    
                </div>
            
            </div>

        </div>
    </>

}


export default Pg

