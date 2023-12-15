"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ReviewCard from "@/components/ReviewCard"
import axios from "axios";
import Link from "next/link";
import { useState , useEffect } from "react";



export default function Home() {

    const [search , setSearch ] = useState("")
    const [ suggestions , setSuggestion ] = useState([])

    async function autoSuggest(query:string){
        const response = await axios.post('/api/autosuggest' , {query})
        let data = response.data
        setSuggestion(data.suggestion)
    }

    useEffect(()=>{

        if(!search) return setSuggestion([])  

            const timer = setTimeout(()=>{
                autoSuggest(search)
            } , 400 )

        return ()=> clearTimeout(timer) 
        
    } , [search])

    console.log(suggestions)

    return (
        <>
                <NavBar></NavBar>
                <main className="flex flex-col justify-center items-center min-h-screen p-24" id="magic">
                    <h1 className="text-6xl font-extrabold font-satoshi">Search your Accomodation</h1>
                    <p className="mt-5 font-semibold text-zinc-300 font-satoshi">Add or Read reviews about your Pg/Room  </p>

                    <div className="w-2/4 flex justify-center mt-10">
                        <div>
                            <input onChange={ (e)=>{ setSearch(e.target.value) } } type="text" className="border rounded-full p-1 px-4 bg-zinc-800 w-full" placeholder="Seach for your pg" />
                            {
                                (suggestions.length > 0 )
                                &&
                                <div className="rounded-lg shadow-2xl bg-stone-900 absolute mt-5 w-80 max-h-96 overflow-auto no-scrollbar ">

                                <ul className="p-2 px-4 flex flex-col items-center no-scrollbar">
                                    {
                                        suggestions.map((item , index)=>{
                                            return <>
                                            <li className="p-1 my-1 hover:text-blue-500 transition-colors" key={item?._id}>
                                                    <Link href={`/pg/${item._id}`}>{ item.name }</Link> 
                                                 </li>
                                                    <hr className="border-1 border-zinc-600 w-full"/>
                                            </> 
                                        })
                                    }
                                </ul>
                                    </div>
                            }
                           
                        </div>
                        <button className="bg-blue-700 p-1 px-4 text-white rounded-full ms-2">search</button>
                    </div>
                </main>

                <section className="py-10">
                    <h2 className="text-4xl font-semibold text-center">reviews</h2>
                </section>

                <section className="p-5 mb-20" id="testimonial">
                    <div className="flex gap-5">
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                    </div>
                </section>

            <Footer></Footer>
        </>
    )
}
