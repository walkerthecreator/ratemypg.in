import Pg from "@/models/Pg";
import { NextRequest, NextResponse } from "next/server";

interface pg {
    name : string ,
    sector : string ,
    location : string ,
    owner : string ,
    type : "pg" | "room" | "flat"
}

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
        const body = await req.json()

        const { name , sector , location , owner , type} = body 

        const pg : pg[] = await Pg.find({ name : body.name })

        if(body.sector && pg){

            for(let i of pg){
                if(i.sector == body.sector){
                    return NextResponse.json({  message : `Pg with name ${ i.name } already exsist in sector ${ i.sector }` , success : false } ,{ status : 400 })
                }
            }

            const newPg = await Pg.create({ 
                    name , sector , location , owner , 
                    type ,
                    postedBy : body.user
                 })
                 

            return NextResponse.json({ message : `Successfully added ${newPg.name} , now you can add reviews to ${ newPg.name }` , success : true }, { status : 200 })
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({ message : "oops ! something went wrong" } , { status : 400 })
    }
}

