import { NextRequest, NextResponse } from "next/server"
import Review from "@/models/reveiw" 
import {connect} from "@/config/dbConfig"

connect()

export const POST = async(req : NextRequest) => {
    try{
        const reqBody = await req.json()
        
        const post = await Review.find({ "name" : { "$regex" : reqBody.query }  }).select("name")
        return NextResponse.json({ suggestion : post } , { status : 200 })
    }
    catch(err){
        return NextResponse.json({ message : "something went wrong with query" } , { status : 400 })
    }
}