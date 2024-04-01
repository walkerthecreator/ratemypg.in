"use client"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"



export default function Signup(){

const searchParams = useSearchParams()

    return (
        <>
        <div className="w-screen p-10 drop-shadow-lg mt-40">
        <div className="w-96 border border-zinc-800 bg-white text-black p-4 px-4 flex flex-col rounded-md mx-auto">

            <h1 className="text-3xl font-satoshi font-semibold">Sign up</h1>
            <p className="text-base font-semibold my-2 text-zinc-600 ">Create New account or Login</p>



            <p className="bg-emerald-50 p-1 rounded-md text-emerald-500 text-sm text-center font-medium">👤Your Identity will be Anonymous</p>

            <button onClick={ ()=>{ signIn("google" , { callbackUrl : searchParams.get('callbackUrl') || "/pg" }) } } className="font-semibold font-satoshi bg-blue-500 text-blue-50 p-1 mt-4 hover:bg-blue-600 transition-all rounded-md">
                Continue With Google
            </button>
        </div>
            </div> 
        </>
    )
}