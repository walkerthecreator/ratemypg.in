import SignInWithGoogle from "@/components/SignInWithGoogle";



export default function Signup(){
    return (
        <>
        <div className="w-screen p-10 drop-shadow-lg mt-10">
        <div className="w-96 border border-zinc-800 bg-white text-black p-4 px-4 flex flex-col rounded-md mx-auto">

            <h1 className="text-3xl font-satoshi font-semibold">sign up</h1>
            <p className="text-sm font-semibold my-2 text-zinc-600 ">create new account for add your own review</p>

            <input type="text" placeholder="Enter email" className="p-1 border rounded-md" />
            <input type="text" placeholder="Enter password" className="p-1 border rounded-md my-2" />
            <button className="bg-black font-satoshi border rounded-md text-white font-semibold p-1">Sign up</button>

            <span className="text-zinc-500 text-xs text-center my-2">or</span>

            <SignInWithGoogle />
            
        </div>
            </div> 
        </>
    )
}