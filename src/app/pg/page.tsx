"use client"
import axios from "axios"


 function page(){

    
    async function fetchData(){
        const data = await axios.get('/api/pg')
        console.log("reviews" , data )
    }

    return <>
        <div>
            <button onClick={ fetchData } className="bg-blue-800 text-blue-200 rounded p-2 ">fetch data</button>
        </div>
    </>

}


export default page

