import Review from "@/models/reveiw"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req : NextRequest) => {
    try{
        const { id } = await req.json() 

        const data = await Review.find({ name : splitedName})
        console.log(data)
        return NextResponse.json({ data : data } ,{ status : 200 })
    } 
    catch(err){
        return NextResponse.json({ message : "oops" } , { status : 400 } )
    }
}

