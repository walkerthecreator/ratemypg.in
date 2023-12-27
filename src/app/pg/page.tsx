"use client"
import Card from "@/components/Card"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"


 function Pg(){

    const [ show , setShow ] = useState(true)
    const [ pg , setPg ] = useState([])

    
    async function fetchData(){
        const response = await axios.get('/api/pg')
        setPg(response.data)
    }
    console.log(pg)

    useEffect(()=>{
        fetchData()
    } , [])

    return <>
        <div>
            {

                show 

                &&

                <div className="bg-purple-300 text-purple-800 fixed top-0 w-screen flex justify-center text-sm p-1 gap-2">
                <p > can't find your pg ? <Link className="underline font-semibold" href="/pg/add-new-pg">Add now</Link> </p>
                <button onClick={ ()=>{ setShow(false) } } className="px-1 bg-purple-200 rounded-md shadow-lg text-xs   ">close</button>
            </div>

            }

            <div className="w-4/5 mx-auto">
            <h1 className="text-4xl mt-5 font-semibold text-center">Reveiws Pg or Room</h1>
                <div className="flex flex-wrap gap-10">

                {
                    pg.reviews?.map((item , index)=>{
                        return <Card key={ item?._id} {...item}/>
                    })
                }


                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                </div>
            </div>

        </div>
    </>

}


export default Pg

