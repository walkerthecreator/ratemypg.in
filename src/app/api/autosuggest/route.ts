import { NextRequest, NextResponse } from "next/server"
import Review from "@/models/reveiw" 
import {connect} from "@/config/dbConfig"
import Pg from "@/models/Pg"

connect()

export const POST = async(req : NextRequest) => {
    try{
        const reqBody = await req.json()
        // const post = await Review.find({ "name" : { "$regex" : reqBody.query.toLowerCase() }  }).select("name _id")
        
        // const pg = await Pg.find({ $text : { $search : reqBody.query.toLowerCase()  } }).select("name _id")
        const pg = await Pg.find({  name : { $regex : reqBody.query.toLowerCase() }  }).select("name _id")
        return NextResponse.json({ suggestion : pg } , { status : 200 })
    }
    catch(err){
        console.log(err)
        return NextResponse.json({ message : "something went wrong with query" } , { status : 400 })
    }
}