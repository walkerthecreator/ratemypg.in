"use client";
import Star from "@/components/Star";
import Features from "@/components/ui/Features";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface formData {
  room: number,
  bathroom: number,
  building: number,
  environment: number,
  pros: string[] ,
  cons: string[] ,
  review: string,
}

type props = {
  params: {
    name : string
  }
}

export default function ReviewPage({ params} : props ) {
  
  const router = useRouter()
  const { data : session } = useSession({
      required : true ,
      onUnauthenticated(){
          router.push(`/api/auth/signin?callbackUrl=/write-a-review/${params.name}`)
      }
  })

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
    if(type == 'pros'){     
      if(formData.pros.indexOf(name) != -1){
        
        const updatedArray = formData.pros.filter((item, index) => {
          return item != name
        }) 

        return setFormData({ ...formData , pros : updatedArray })
      }
      return setFormData({ ...formData , pros : [ ...formData.pros , name ] })
    }


    if(formData.cons.indexOf(name) != -1 ){
      const updatedArray = formData.cons.filter((item) => {
        return item != name
      })
      return setFormData({ ...formData , cons : updatedArray })
    }
    return setFormData({ ...formData , cons : [ ...formData.cons , name ] })
  }

  async function handleSubmit(){
    if(formData.review.length <= 20 ){
      return setError({ message : "Review length must be atleast 20 words" , field : "Review" })
    }
    else if(formData.pros.length == 0 || formData.cons.length == 0){
      return setError({ message :  "Please Select atleast one Pros & one Cons" , field : "Feature" })
    }
    else{
      setError({message : "" , field : ""})
    }

    const data = { 
      user : session?.user.id ,
      pg : params.name ,
      rating : {
          room : formData.room ,
          environment : formData.environment ,
          location : formData.building,
          bathroom : formData.bathroom 
        },
      pros : formData.pros ,
      cons : formData.cons ,
      review : formData.review
    } 

    const response = await axios.post('/api/pg/write-a-review' , data )
    const responseData = response.data 
    console.log("response while submitting" , responseData)
    router.push(`/pg/${params.name}`)
    
  }

  return (
    <div className="mt-20 w-4/5 mx-auto ">
      <h1 className="text-4xl my-4 text-center">Add a Review</h1>
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
          <p className="text-sm">Based on the Building&apos;s age security</p>
        </div>

        <div>
          <Star handleChange={handleStarChange} ratingFor="building" starIndex={4}/>
        </div>
      </div>

      <Features handleFeatures={handleFeatures} />

      <div className="w-3/4 mx-auto mt-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold">write a review</h2>
            <p className="text-zinc-300">
              share your review, pros, cons and your experince in pg
            </p>
          </div>
            <button className="bg-zinc-200 rounded p-2 px-4 text-black flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
              Write with AI 
              </button>
        </div>
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
        <div className="bg-red-800/40 rounded border border-red-700 text-red-200 my-5 w-2/4 text-center mx-auto">
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
