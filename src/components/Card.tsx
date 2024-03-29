import user from "@/assets/user.svg"
import Image from "next/image"

interface cardProps {
    name : string ,
    location : string ,
    owner : string ,
    _id : string ,
    type : string ,
    reviews : string ,
    handleReadMore : (id : string)=> void
}

const Card = ({ name , location , owner , _id , type , reviews , handleReadMore } : cardProps) => {
    return <div className="mt-10 w-96 border border-zinc-600 p-2 px-4 rounded-lg bg-zinc-800">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{ name }</h1>
            <div className="bg-yellow-200 text-xs font-semibold p-px px-1 rounded-md text-yellow-700 shadow-lg">
                <span>{ type }</span>
            </div>
        </div>
        <p className="text-sm font-semibold text-zinc-300 my-3">Reviews { reviews?.length }</p>
        <p className="text-white font-semibold text-sm"> <span className="text-xs text-zinc-300">owner:</span> { owner }</p>
        <button onClick={ ()=>{ handleReadMore(_id) } } className="bg-white border-b-2  text-black font-satoshi p-1 text-sm font-bold rounded-full w-full my-2">Read reviews</button>
    </div>  
}

export default Card