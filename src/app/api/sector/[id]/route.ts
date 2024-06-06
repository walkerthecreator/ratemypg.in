import { connect } from "@/config/dbConfig";
import Pg from "@/models/Pg";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(req : NextRequest , { params }: { params : { id : string } } ){
    const searchParams = req.nextUrl.searchParams
    console.log("what is it "  , params , req.url )
    const location = searchParams.get('location')
    const data = await Pg.find({ sector : params.id , location : location  })
    console.log("checking" , location)
    return NextResponse.json({ pgs : data })
}