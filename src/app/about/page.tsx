import ReviewCard from "@/components/ReviewCard";


export default function About(){
    return <div id="about" className="bg-slate-00 text-white min-h-screen overflow-hidden">
            <div className="w-100 h-100 relative ">
                <div className="absolute top-32 left-[-5%] rotate-6">
                    <ReviewCard />
                </div>
                <div className="absolute top-32 right-[-5%] -rotate-12">
                    <ReviewCard />
                </div>
                <div className="absolute top-[60vh] left-[0%] -rotate-12">
                    <ReviewCard />
                </div>
                <div className="absolute top-[80vh] left-[90%] rotate-6">
                    <ReviewCard />
                </div>
            </div> 


        <div className="mt-52 w-3/5 mx-auto text-center">
            <h1 className="text-center text-6xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-blue-600 via-zinc-50 to-zinc-100 leading-tight">Discover, rate, and share your PG reviews with <span className="text-blue-600 text-6xl bg-zinc-200 rounded-md">RateMyPG.</span> </h1>
            <p className="text-2xl text-zinc-300 font-semibold mt-2">Where every opinion influences your next phenomenal choice!</p>
        </div>

        <div className="flex w-3/4 mx-auto justify-center gap-5 items-center mt-14">
            <button className="text-5xl font-semibold p-1 h-16 w-52 border-orange-100 border-t-2 drop-shadow-md rounded-lg bg-gradient-to-b from-orange-200 to-orange-300 ring-1 ring-orange-300">
                <span className="bg-gradient-to-b text-transparent from-orange-500 to-orange-700 bg-clip-text">Rooms</span>
                </button>

                <button className="text-5xl font-semibold p-1 h-16 w-52 text-lime-700  border-lime-100 border-t-2 drop-shadow-md rounded-lg bg-gradient-to-b from-lime-200 to-lime-300 ring-1 ring-lime-300">
                <span className="bg-gradient-to-b text-transparent from-lime-500 to-lime-700 bg-clip-text">PG&apos;s</span>
                </button>

                <button className="text-5xl font-semibold p-1 h-16 w-52  border-emerald-100 border-t-2 drop-shadow-md rounded-lg bg-gradient-to-b from-emerald-200 to-emerald-300 ring-1 ring-emerald-300">
                <span className="bg-gradient-to-b text-transparent from-emerald-500 to-emerald-700 bg-clip-text">Flats</span>
                </button>
        </div>

        <div className="w-fit group text-center mx-auto mt-20">
            <button className="w-full text-4xl p-2 px-6 rounded-lg shadow-inner flex items-center animate-bounce">
                Start Reading
                <span className="group-hover:rotate-45 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </span>
            </button>
        </div>
    </div>
}