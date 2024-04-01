// "use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import dateFormatter from "@/helper/DateFormatter";
import Link from "next/link";
import { pg } from "@/types/type";
import { fromJSON } from "postcss";

// const SinglePg = ({params} : { params : {id : string }} ) => {

// const [ pg , setPg ] = useState< pg | "" >("")

// const { data : session } = useSession({
//     required : true ,
//     onUnauthenticated(){
//         redirect('/api/auth/signin?callbackUrl=/pg')
//     }
// })

// const id = params.id

// useEffect(()=>{
//     async function getData(){
//         const res = await axios.post(`/api/pg/${id}`)
//         const data = res.data
//         setPg(data.data)
//     }

//     getData()

// } , [id])

// console.log("pg" , pg)

// return(
//     <>

//     <h1>Ssr</h1>

{
  /* <main className="flex justify-center min-h-[70vh] mt-20 w-5/6 gap-4 mx-auto">

        <div className="flex flex-col w-2/6 rounded-xl p-5 ">
            <div className="border-b-2 border-zinc-700 pb-10">
                <h1 className="text-3xl font-semibold">{pg?.name}</h1>
                <h3 className="mt-4"> Owner : <span className="font-semibold">{ pg?.owner }</span> </h3>
            </div>
            <div className="border-b-2 border-zinc-700 py-10">
                    <h2>Overall Ratings</h2>

            </div>
            <div className="pt-4">
                <h4 className="text">stayed at {pg?.name} ?</h4>
                <h2 className="mt-1 text-3xl font-semibold ">Add your Experince with them</h2>
            </div>
                <Link href={`/write-a-review/${id}`} className="btn-primary w-full text-center mt-6 mx-auto">write a review</Link>
        </div>

        <div className="p-5 w-4/5 border border-zinc-700 rounded-xl mx-auto flex flex-col justify-between">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Read review of { pg?.name }</h1>        
            </div>



            <div className="flex items-center justify-between gap-4">

                <div className="w-fit p-1 px-4  bg-zinc-900 border border-zinc-600 flex items-center gap-3 rounded-xl">
                        <Image className="rounded-full" src={ pg?.postedBy?.picture } alt="user" width="36" height="36"></Image>
                        <h4>{ pg?.postedBy?.email }</h4>
                </div>

                <div>
                    {
                        (pg) ?
                        <p className="text-indigo-700 bg-indigo-200 font-semibold rounded-md w-fit p-1 text-xs "> Added on { dateFormatter(pg?.createdAt) }</p>
                        :
                        "loading..."   
                    }
                </div>
            </div>
        </div>

        
        </main> */
}

//         </>
//     )
// }

function SingleStar(){
  return <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#ffc143"
  className="bi bi-star-fill"
  viewBox="0 0 16 16"
>
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
</svg>
}

const SinglePg = async ({ params }: { params: { id: string } }) => {
    let url = `http://localhost:3000/api/pg/${params.id}`
    const response = await fetch(url);
    const formatted = await response.json();
    let pg = formatted.data
    console.log(pg)

  return (
    <>
      <main className="flex justify-center min-h-[70vh] mt-20 w-5/6 gap-4 mx-auto">
        <div className="flex flex-col w-2/6 rounded-xl p-5 ">
          <div className="border-b-2 border-zinc-700 pb-10">
            <h1 className="text-3xl font-semibold">{pg?.name}</h1>
            <h3 className="mt-4">
              Owner : <span className="font-semibold">{pg?.owner}</span>{" "}
            </h3>
          </div>
          <div className="border-b-2 border-zinc-700 py-10">
            <h2>Overall Ratings</h2>
          </div>
          <div className="pt-4">
            <h4 className="text">stayed at {pg?.name} ?</h4>
            <h2 className="mt-1 text-3xl font-semibold ">
              Add your Experince with them
            </h2>
          </div>
          <Link
            href={`/write-a-review/${params.id}`}
            className="btn-primary w-full text-center mt-6 mx-auto"
          >
            write a review
          </Link>
        </div>

        <div className="p-5 w-4/5 border border-zinc-700 rounded-xl mx-auto flex flex-col justify-between">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">
              Read review of {pg?.name}
            </h1>
          </div>

          {
            (pg.reviews.length < 3) ? 
            <div className="bg-sky-400 text-white p-3 rounded-md text-lg w-3/4 mx-auto flex gap-2 items-start">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
                <div>
                  <p className="inline-block">It looks like <span className="font-semibold">{pg.name}</span> is new to ratemypg.in and only has {pg.reviews.length} reviews. For this page to be a helpful resource, we rely on the contribution of tenats</p>
                  <span className="font-semibold"> - ratemypg.in </span>
                </div>
            </div>
            :
            ""
          }

          <div className="flex flex-col my-10 gap-4">
              {
                pg.reviews.map((item:any) => {
                  return <div className="p-3 border-b-2 border-zinc-600 ">

                    <div className="flex items-start gap-4 my-3">
                        <span className="p-2 px-4 rounded-full bg-zinc-600 ">A</span>
                        <div>
                          <h2 className="font-semibold text-2xl text-zinc-300">Anonymouse User</h2>
                          <p className="text-lg py-2">{item.review}</p>
                        </div>
                    </div>

                    <div className="p-1 my-1">
                      {
                        item.pros.map((item:string)=> <span className="p-1 px-2 text-sm m-1 rounded-full bg-emerald-900 text-emerald-400 ">{item}</span> )
                      }
                      {
                      item.cons.map((item: string )=> <span className="p-1 px-2 text-sm m-1 rounded-full bg-red-900 text-red-300">{item}</span> )
                      }
                    </div> 

                    {/* <div className="flex flex-col justify-between w-full my-4">
                      <div className="flex justify-between w-60">
                        <h4>Bathroom</h4>
                        <div className="flex gap-1"> { [...Array(item.rating.bathroom)].map((_ ,index) => <SingleStar/>) }</div>
                      </div>
                      <div className="flex justify-between w-60">
                        <h4>Room</h4>
                        <div className="flex gap-1 "> { [...Array(item.rating.room)].map((_ ,index) => <SingleStar/>) }</div>
                      </div>
                      <div className="flex justify-between w-60">
                        <h4>Location</h4>
                        <div className="flex gap-1 ">{ [...Array(item.rating.location)].map((_ ,index) => <SingleStar/>) }</div>
                      </div>
                      <div className="flex justify-between w-60">
                        <h4>Building</h4>
                        <div>
                          <div className="flex gap-1 ">{ [...Array(item.rating.building)].map((_ ,index) => <SingleStar/>) }</div>
                        </div>
                      </div>
                    </div>  */}

                    <table className="my-4">
                        <tr>
                          <td>Bathroom</td>
                          <td className="ps-10">
                            <div className="flex">
                                { [...Array(item.rating.bathroom)].map((_ ,index) => <span className="ml-1"><SingleStar/></span> ) }
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Room</td>
                          <td className="ps-10">
                            <div className="flex">
                                { [...Array(item.rating.room)].map((_ ,index) =>  <span className="ml-1"><SingleStar/></span> ) }
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Location</td>
                          <td className="ps-10">
                            <div className="flex">
                                { [...Array(item.rating.location)].map((_ ,index) =>  <span className="ml-1"><SingleStar/></span> ) }
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Building</td>
                          <td className="ps-10">
                            <div className="flex">
                                { [...Array(item.rating.building)].map((_ ,index) =>  <span className="ml-1"><SingleStar/></span> ) }
                            </div>
                          </td>
                        </tr>
                    </table>

                  </div> 
                })
              }
            </div>

          <div className="flex items-center justify-between gap-4">
            <div className="w-fit p-1 px-4  bg-zinc-900 border border-zinc-600 flex items-center gap-3 rounded-xl">
              <Image
                className="rounded-full"
                src={pg?.postedBy?.picture}
                alt="user"
                width="36"
                height="36"
              ></Image>
              <h4>{pg?.postedBy?.email}</h4>
            </div>

            <div>
              <p className="text-indigo-700 bg-indigo-200 font-semibold rounded-md w-fit p-1 text-xs ">
                {" "}
                Added on {dateFormatter(pg?.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePg;
