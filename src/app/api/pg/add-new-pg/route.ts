import Pg from "@/models/Pg";
import { NextRequest, NextResponse } from "next/server";

export const GET = async() => {
    try{
        const pg = await Pg.find()
        return NextResponse.json({ pg } , { status : 200 })
    }
    catch(err){
        return NextResponse.json({ message : "oops ! something went wrong" } , { status : 400 })
    }
    
} 


export const POST = async(req : NextRequest) => {
    try{
        const reqBody = req.body!
        const pg = await Pg.find({ name : reqBody.name })

        if(reqBody.sector){
            for(let i of pg){
                if(i?.sector == reqBody.sector){
                    return NextResponse.json({  message : `Pg with name ${ pg.name } already exsist in sector ${ pg.sector } ` } ,{ status : 400 })
                }
            }
        }

        return NextResponse.json({ message : `Successfully added ${pg.name} , now you can add reviews to ${ pg.name }` }, { status : 200 })

    }
    catch(err){
        return NextResponse.json({ message : "oops ! something went wrong" } , { status : 400 })
    }
}

