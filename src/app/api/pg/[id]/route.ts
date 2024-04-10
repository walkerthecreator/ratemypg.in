import Pg from "@/models/Pg"
import Review from "@/models/reveiw"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req : NextRequest  , {params} : { params : {id : string }} ) => {
    try{
        const data = await Pg.findOne({ _id : params.id }).populate("postedBy reviews")
        console.log("in backend" , data )
        return NextResponse.json({ data : data } ,{ status : 200 })
    } 
    catch(err){
        return NextResponse.json({ message : "oops" } , { status : 400 } )
    }
}

