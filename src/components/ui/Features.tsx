"use client"
import { useState } from "react"

type featuresType = {
    name : string ,
    type : "pros" | "cons" ,
    active : boolean
} 

let featuresList : featuresType [] = [
    {
        name : "Clean" ,
        type : "pros"  ,
        active : false
    } ,
    {
        name : "Safe" ,
        type : "pros" ,
        active : false
    } ,
    {
        name : "Quiet" ,
        type : "pros" ,
        active : false
    } ,
    {
        name : "Near Market" ,
        type : "pros" ,
        active : false
    } ,
    {
        name : "Dirty" ,
        type : "cons" ,
        active : false
    } ,
    {
        name : "Not Safe" ,
        type : "cons" ,
        active : false
    } ,
    {
        name : "Far Market" ,
        type : "cons" ,
        active : false
    } ,
    {
        name : "Noisy" ,
        type : "cons" ,
        active : false
    } ,
    {
        name : "Rude Owner" ,
        type : "cons" ,
        active : false
    }
]


function Features({handleFeatures}: { handleFeatures : (name : string , type : string ) => void }){

    const [ features , setFeatures ] = useState(featuresList)

    function selectFeatures(name : string){
        let updated = features.map((item) => {
            if(item.name == name ) return { ...item ,  active : ! item.active }
            return item
        } )

        setFeatures(updated)
    }

    function handleChange(name : string , type : string  ){
        selectFeatures(name)
        handleFeatures(name , type )
    }

    return <div className="mt-10 w-3/4 mx-auto ">
    <h1 className="text-2xl font-semibold">Select Pros and Cons</h1>
    <p className="text-zinc-300">select the features of Accomodation based on your reviews</p>
    <div className="my-10 flex flex-wrap gap-2 w-1/2 mx-auto p-3">
        {
            features.map((item, index)=>{
                if(item.type == 'pros') return <button onClick={()=>{ handleChange(item.name , item.type) }} key={index} className={`border rounded-full p-1 px-4 hover:bg-emerald-900 hover:text-emerald-300 hover:border-emerald-600 transition-colors ` + (item.active ? "bg-emerald-900 text-emerald-300 border-emerald-600" : "")}>{item.name}</button>
                return <button key={index} onClick={()=>{ handleChange(item.name , item.type) }} className={"border rounded-full p-1 px-4 hover:bg-red-900 hover:text-red-300 hover:border-red-600 transition-colors " + (item.active ? "bg-red-900 text-red-300 border-red-600" : "")}>{item.name}</button>
            })
        }

    </div>
</div>
}

export default Features