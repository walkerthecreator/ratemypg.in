import Image from "next/image"
import Link from "next/link"
import sectorPath from "@/assets/sector1.png"
import { URL } from "url"

interface sectors{
    _id : {
        sector : string ,
        location : string
    } ,
    count : number 
}

async function Sector(){
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/sector`)
    const data = await response.json()
    const pgs = data.pgs


    return <div className="mt-20 w-4/5 mx-auto">
        <h1 className="text-3xl text-center font-semibold my-10">Browse Pg&apos;s by Sector</h1>
        <div className="flex justify-center gap-10 flex-wrap">

            {
                pgs.map((item : sectors ) => {
                    return <div key={item._id.sector } className="border p-2 px-[10px] bg-stone-900 w-80 border-zinc-600 rounded-xl ">
                    <div className="relative">
                        <h1 className="absolute top-14 left-[50%] -translate-x-[50%] text-8xl opacity-90 font-semibold z-10">{ item._id.sector }</h1>
                        <Image src={sectorPath} className="rounded-lg object-cover w-full" width="300" height="150" alt="sector-art" draggable="false" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-end justify-between py-2">
                            <h1 className="font-semibold px-2 text-2xl mt-2 m-0">Sector <span className="text-2xl">{item._id.sector}</span></h1>
                            <p className="px-2 m-0 text-zinc-00 font-medium rounded bg-zinc-800  text-zinc-200">{ item._id.location }</p>
                        </div>
                        {/* <Link href={`${process.env.NEXTAUTH_URL}/sector/${item._id.sector}?location=${item._id.location}`} className="text-center mt-2 btn-primary w-full mx-auto">See {item.count} PG</Link> */}
                        <Link
                        className="text-center mt-2 btn-primary w-full mx-auto"
                        href={{ 
                            pathname : `${process.env.NEXTAUTH_URL}/sector/${item._id.sector}` ,
                            query : { location : item._id.location }
                     }}
                        >See {item.count} PG</Link>

                    </div>
                </div>
                })
            }



    </div> 

        


    </div>
}

export default Sector