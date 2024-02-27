import Pg from "@/models/Pg"
import Review from "@/models/reveiw"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req : NextRequest  , {params} : { params : {id : string }} ) => {
    try{

        console.log("checking params in node " , params.id)

        const data = await Pg.findOne({ _id : params.id }).populate("postedBy")
        console.log("found pg is " , data)
        return NextResponse.json({ data : data } ,{ status : 200 })
    } 
    catch(err){
        return NextResponse.json({ message : "oops" } , { status : 400 } )
    }
}

