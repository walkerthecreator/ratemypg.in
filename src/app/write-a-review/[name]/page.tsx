import Star from "@/components/Star";
import Features from "@/components/ui/Features";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"; 



export default function ReviewPage(){



    return <div className="mt-20 w-4/5 mx-auto ">
        <h1 className="text-4xl my-4 text-center">New Lucky Building</h1>
        <div className="border border-zinc-700 rounded-md p-5 mt-12 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-semibold">Rate the <span className="text-indigo-300">Room</span></h2>
                <p className="text-sm">Based on the look of your room</p>
            </div>

            <div>
                <Star />
            </div>
        </div>

        <div className="border border-zinc-700 rounded-md p-5 mt-4 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-semibold">Rate the <span className="text-indigo-300">Bathroom</span></h2>
                <p className="text-sm">Based on the condition of bathroom</p>
            </div>

            <div>
                <Star />
            </div>
        </div>

        <div className="border border-zinc-700 rounded-md p-5 mt-4 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-semibold">Rate the <span className="text-indigo-300">Environment</span></h2>
                <p className="text-sm">Based on the noise levels, market, roads of bathroom</p>
            </div>

            <div>
                <Star />
            </div>
        </div>

        <div className="border border-zinc-700 rounded-md p-5 mt-4 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-semibold">Rate the <span className="text-indigo-300">Building</span></h2>
                <p className="text-sm">Based on the Building's age security</p>
            </div>

            <div>
                <Star />
            </div>
        </div>


        <Features/>



        <div className="w-3/4 mx-auto mt-20">
            <h2 className="text-3xl font-semibold">write a review</h2>
            <p className="text-zinc-300">share your review, pros, cons and your experince in pg</p>
            <textarea 
            className="h-32 w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md mt-5 text-white"
            placeholder="write your thoughts"/>
        </div>

        <div className="w-40 mx-auto my-10">
                <button className="bg-white rounded p-2 w-full text-black">Add review</button>
        </div>




    </div>
}

