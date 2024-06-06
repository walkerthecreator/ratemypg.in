import Pg from "@/models/Pg";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/dbConfig";

connect()

export async function GET(req : NextRequest){

    const data = await Pg.aggregate([
        {
            $group : {
                _id : { sector : "$sector" , location : "$location" } ,
                count : { $sum : 1 } ,
            }
        }  
    ])

    return NextResponse.json({ pgs : data })
}