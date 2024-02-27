import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/config/dbConfig"
import Pg from "@/models/Pg"
import User from "@/models/user";
import Review from "@/models/reveiw";

connect()

export async function GET(req : NextRequest){
    try{

        const pgs = await Pg.find()
        const reviewsCount = await Review.find().count()
        return NextResponse.json({ pgs , reviewsCount  } , { status : 200 } )
    }
    catch(err){
        NextResponse.json({ message : "OOPS! error fetching data from server" } ,{status : 400})
        console.log("OOPS! error fetching data from server")
    }
     
}