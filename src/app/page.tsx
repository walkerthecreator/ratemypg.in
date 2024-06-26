"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ReviewCard from "@/components/ReviewCard";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { suggestion } from "@/types/type";

export default function Home() {

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  async function autoSuggest(query: string) {
    const response = await axios.post("/api/autosuggest", { query });
    let data = response.data;
    setSuggestion(data.suggestion);
  }

  useEffect(() => {
    if ( !search ) return setSuggestion([]);
    
      const timer = setTimeout(() => {
        autoSuggest(search);
      }, 400);
      
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      {/* <NavBar></NavBar> */}
      <div className="max-w-screen overflow-hidden">

      <main className=" flex flex-col justify-center items-center min-h-screen p-4 md:p-24" id="magic">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-300">
          Search your Accomodation
        </h1>
        <p className="text-left md:text-center mt-5 text-lg font-semibold text-zinc-400 font-satoshi">
         <span className="text-zinc-200">Add</span> or <span className="text-zinc-200">Read</span> reviews about your Pg/Room
        </p>

        <div className="w-full max-sm:flex-col max-sm:mt-4 gap-2 justify-start md:w-2/4 flex md:justify-center mt-10">
          <div>
            <input
              onChange={(e) => { console.log(e.target.value) ; setSearch(e.target.value); }}
              type="text"
              className="border rounded-md p-2 border-zinc-600 px-4 bg-zinc-800 w-full md:w-96 focus:border-zinc-400 outline-none"
              placeholder="Seach for your pg"
            />

            {
              search.length > 0 && (
              <div className="rounded-lg shadow-2xl bg-stone-900 border border-stone-700 absolute mt-5 w-[30rem] max-h-96 overflow-auto no-scrollbar ">
                <div className="p-2 px-4 flex flex-col items-center no-scrollbar">
                  {
                  suggestions.map((item: suggestion) => {
                    return (
                      <>
                      <Link href={`/pg/${item._id}`} className="p-1 flex gap-2 font-medium items-center my-1 hover:text-blue-500 transition-colors">
                          <span>{item.name}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>                      </Link>
                        <hr className="border-1 border-zinc-600 w-full" />
                      </>
                    );
                  })}
                  <Link href='pg/add-new-pg' className="btn-primary text-center m-2 w-full rounded font-medium p-2">Add your pg</Link>
                </div>
              </div>
            )}
          </div>
          <button className="bg-blue-700 max-sm:w-full hover:border-transparent hover:translate-y-px p-1 px-4 text-white rounded-md border-b-2 border-blue-500 outline-2 md:ms-2">
            search
          </button>
        </div>
      </main>

      <section className="pb-5 md:py-10">
        <h2 className="text-4xl font-semibold text-center">Reviews posted by Tenats</h2>
      </section>

      <section className="p-5 mb-20 w-screen" id="testimonial">
        <div className="flex flex-col items-center justify-center md:flex-row gap-5">
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
      </section>

      <Footer></Footer>
      </div>
    </>
  );
}
