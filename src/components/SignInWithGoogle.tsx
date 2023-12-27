"use client"
import { signIn } from "next-auth/react";

export default function SignInWithGoogle(){

    console.log(window.location.origin)

    return <button 
            onClick={ ()=> { signIn('google' , {
                callbackUrl : `${window.location.origin}/pg/add-new-pg`
            }) }}
            className="bg-zinc-200 font-satoshi text-black font-semibold p-1 rounded">
                Sign in with google 
            </button>
}