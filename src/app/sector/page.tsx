import Image from "next/image"
import Link from "next/link"
import sectorPath from "@/assets/sector1.png"

function Sector(){

    // async function fetchdata(){
        // const pg = await Pg.findOne() 

    // }        

    return <div className="mt-20 w-4/5 mx-auto">
        <h1 className="text-3xl text-center font-semibold my-10">Browse Pg's by Sector</h1>
        <div className="flex justify-center gap-10 flex-wrap">

            {
                [...Array(10)].map((item , index) => {
                    return <div className="border p-2 px-[10px] bg-stone-900 w-80 border-zinc-600 rounded-xl ">
                    <div className="relative">
                        <h1 className="absolute top-14 left-[50%] -translate-x-[50%] text-8xl opacity-40 font-semibold z-10">{ Math.ceil(Math.random() * 100)}</h1>
                        <Image src={sectorPath} className="rounded-lg object-cover w-full" width="300" height="150" alt="sector-art" draggable="false" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-end justify-between py-1">
                        <h1 className="font-semibold px-2 text-2xl mt-2 m-0">Sector <span className="text-2xl">34</span></h1>
                        <p className="px-2 m-0 text-zinc-00 font-medium rounded bg-zinc-800  text-zinc-200">Chandigarh</p>
                        </div>
                        <Link href="/pg" className="text-center mt-2 btn-primary w-full mx-auto">See PG</Link>
                    </div>
                </div>
                })
            }

        <div className="border p-2 px-[10px] bg-stone-900 w-80 border-zinc-600 rounded-xl hover:-translate-y-1 transition-transform">
            <div className="relative">
                <h1 className="absolute top-14 left-20 text-8xl opacity-40 font-semibold z-10">34</h1>
                <Image src={sectorPath} className="rounded-lg object-cover w-full" width="300" height="150" alt="sector-art" draggable="false" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-end justify-between py-1">
                <h1 className="font-semibold px-2 text-2xl mt-2 m-0">Sector <span className="text-2xl">34</span></h1>
                <p className="px-2 m-0 text-zinc-300 font-medium">Chandigarh</p>
                </div>
                <Link href="/pg" className="text-center mt-2 btn-primary w-full mx-auto">See PG</Link>
            </div>
        </div>

        <div className="border p-2 px-[10px] bg-stone-900 w-80 border-zinc-600 rounded-xl bg">
            <div className="relative">
                <h1 className="absolute top-14 left-20 text-8xl opacity-40 font-semibold z-10">70</h1>
                <Image src={sectorPath} className="rounded-lg object-cover w-full" width="300" height="150" alt="sector-art" draggable="false" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-end justify-between py-1">
                <h1 className="font-semibold px-2 text-2xl mt-2 m-0">Sector <span className="text-2xl">34</span></h1>
                <p className="px-2 m-0 text-zinc-300 font-medium">Mohali</p>
                </div>
                <Link href="/pg" className="text-center mt-2 btn-primary w-full mx-auto">See PG</Link>
            </div>
        </div>

        <div className="border p-2 px-[10px] bg-stone-900 w-80 border-zinc-600 rounded-xl bg">
            <div className="relative">
                <h1 className="absolute top-14 left-20 text-8xl opacity-40 font-semibold z-10">17</h1>
                <Image src={sectorPath} className="rounded-lg object-cover w-full" width="300" height="150" alt="sector-art" draggable="false" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-end justify-between py-1">
                <h1 className="font-semibold px-2 text-2xl mt-2 m-0">Sector <span className="text-2xl">34</span></h1>
                <p className="px-2 m-0 text-zinc-300 font-medium">Chandigarh</p>
                </div>
                <Link href="/pg" className="text-center mt-2 btn-primary w-full mx-auto">See PG</Link>
            </div>
        </div>




    </div> 

        


    </div>
}

export default Sector