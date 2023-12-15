import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/config/dbConfig"
import Review from "@/models/reveiw"

connect()

export async function GET(req : NextRequest){
    try{

        const reviews = await Review.find()
        return NextResponse.json({reviews} , { status : 200 } )
    }
    catch(err){
        NextResponse.json({ message : "OOPS! error fetching data from server" } ,{status : 400})
        console.log("OOPS! error fetching data from server")
    }
     
}