"use client";
import Star from "@/components/Star";
import Features from "@/components/ui/Features";
import { useState } from "react";

interface formData {
  room: number,
  bathroom: number,
  building: number,
  environment: number,
  pros: string[] | [],
  cons: string[] | [],
  review: string,
}

export default function ReviewPage() {
  const [formData, setFormData] = useState<formData>({
    room: 1,
    bathroom: 1,
    building: 1,
    environment: 1,
    pros: [] ,
    cons: [] ,
    review: "",
  });

  const [error , setError] = useState({ message : "" , field : "" })

  function handleStarChange(name : string , value : number ){
    setFormData({...formData , [name] : value })
  }

  function handleFeatures( name : string , type : string ){
    setFormData({ ...formData , [type] : [...formData.pros , type ] })
  }

  function handleSubmit(){
    if(formData.review.length <= 20 ){
      setError({ message : "Review length must be atleast 20 words" , field : "Review" })
    }
    else if(formData.pros.length == 0 || formData.cons.length == 0){
      setError({ message :  "Please Select atleast one Pros & one Cons" , field : "Feature" })
    }
    else{
      setError({message : "" , field : ""})
      console.log('all Good')
    }
  }


  return (
    <div className="mt-20 w-4/5 mx-auto ">
      <h1 className="text-4xl my-4 text-center">New Lucky Building</h1>
      <div className="border border-zinc-700 rounded-md p-5 mt-12 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Rate the <span className="text-indigo-300">Room</span>
          </h2>
          <p className="text-sm">Based on the look of your room</p>
        </div>

        <div>
          <Star handleChange={handleStarChange} ratingFor="room" starIndex={1}/>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-5 mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Rate the <span className="text-indigo-300">Bathroom</span>
          </h2>
          <p className="text-sm">Based on the condition of bathroom</p>
        </div>

        <div>
        <Star handleChange={handleStarChange} ratingFor="bathroom" starIndex={2}/>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-5 mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Rate the <span className="text-indigo-300">Environment</span>
          </h2>
          <p className="text-sm">
            Based on the noise levels, market, roads of bathroom
          </p>
        </div>

        <div>
        <Star handleChange={handleStarChange} ratingFor="environment" starIndex={3}/>
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-5 mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Rate the <span className="text-indigo-300">Building</span>
          </h2>
          <p className="text-sm">Based on the Building's age security</p>
        </div>

        <div>
          <Star handleChange={handleStarChange} ratingFor="building" starIndex={4}/>
        </div>
      </div>

      <Features handleFeatures={handleFeatures} />

      <div className="w-3/4 mx-auto mt-20">
        <h2 className="text-3xl font-semibold">write a review</h2>
        <p className="text-zinc-300">
          share your review, pros, cons and your experince in pg
        </p>
        <textarea
          className="h-32 w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md mt-5 text-white"
          placeholder="write your thoughts"
          onChange={ (e)=>{ setFormData({...formData , review : e.target.value }) } }
          value={ formData.review }
        />
      </div>

      {
        error.message.length > 1
        &&
        <div className="bg-red-800 rounded border border-red-700 text-red-200 my-5 w-2/4 text-center mx-auto">
            <p>{error.message}</p>
        </div> 

      }

      <div className="w-40 mx-auto my-10">
        <button className="bg-white rounded p-2 w-full text-black" onClick={ handleSubmit }>
          Add review
        </button>
      </div>
    </div>
  );
}
