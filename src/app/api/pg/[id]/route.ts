import Review from "@/models/reveiw"
import { NextRequest, NextResponse } from "next/server"


export const GET = (req : NextRequest) => {
    try{
        const {id} = req.params
        console.log(id)
        // const data = await Review.find({_id : id})
        return NextResponse.json({ message : "working" } ,{ status : 200 })
    }
    catch(err){
        return NextResponse.json({ message : "oops" } , { status : 400 } )
    }

}

