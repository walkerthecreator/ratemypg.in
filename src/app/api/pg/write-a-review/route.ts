import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/config/dbConfig"
import Review from "@/models/reveiw";
import Pg from "@/models/Pg";
import User from "@/models/user"

connect()

export async function POST(req : NextRequest){
    try{
        const body = await req.json()
        const { pros , cons , rating , user , pg , review } = body

        console.log("ratemypg" , pros , cons , rating , user , pg , review)

        const newReview = await Review.create({user , rating , pros , cons, pg , review })
        const pgName = await Pg.updateOne({ _id : pg } , { $push : { reviews : newReview._id } })
        const userReviews = await User.updateOne({ _id : user } , { $push : { reviews : newReview._id } }) 

            return NextResponse.json({message : "created successfully"} , { status : 200 })
    }
    catch(err){
        console.log(err)
        return NextResponse.json({ message : "OOPS! error fetching data from server" } ,{status : 400})
    }
     
}