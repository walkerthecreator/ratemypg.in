"use client"
import { options } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

const varient = {
    input: "p-1 px-2 rounded text-sm mb-4 shadow-lg text-black",
};

interface formDataType{
    name : String ,
    user : String ,
    owner : String ,
    sector : String,
    location : String  ,
    type : "pg" | "room" | "flat"
}

const AddPg = () => {

    const [ loading , setLoading ] = useState(false)
    const {data : session} = useSession()
    const [ formData , setFormData ] = useState<Partial<formDataType> >({ name : '' , owner : '' , location : "" , sector : "" , type : "pg"  })
    
    const AddData = async () => {
        try{
            setLoading(true)
            const response = await axios.post('/api/pg/add-new-pg' , {...formData , user : session?.user.id}) 
            const data = response.data
            
        }
        catch(err){
            console.log("something went wrong!" + err)
        }
        finally{
            setLoading(false)
        }    
    };

    function handleChange(e:SyntheticEvent){
        const { name , value } = e.target
        
        setFormData(prev=>({ 
            ...prev ,
            [name] : value
    }))
    }

    console.log(formData)

    return (
        <>
            <button className="bg-zinc-800 py-2 px-4 absolute top-10 left-10 rounded-full">
                <Link href="/pg">back</Link>
            </button>

            <form
                // action={AddData}
                className="flex bg-gradient-to-bl from-zinc-900 via-zinc-800 to-zinc-900 text-white border border-zinc-900 flex-col justify-around w-2/4 mt-20 mx-auto px-10 py-6 rounded-lg"
            >
                <h2 className="text-3xl font-bold font-satoshi mb-5 bg-gradient-br from-gray-700 to-gray-900">
                    Add new Pg
                </h2>

                <input
                    type="text"
                    placeholder="Pg/Room name"
                    name="name"
                    className={varient.input}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Owner name"
                    name="owner"
                    className={varient.input}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Sector"
                    name="sector"
                    className={varient.input}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className={varient.input}
                    onChange={handleChange}
                    required
                />

                <div className="flex gap-5">
                    <label htmlFor="type">Select your Accomodation type</label>

                    <select
                        name="type"
                        id="type"
                        onChange={handleChange}
                        className="p-1 w-32 rounded text-white px-2 bg-stone-700">
                        <option value="pg" >Pg</option>
                        <option value="room">Room</option>
                        <option value="flat">Flat</option>
                    </select>
                </div>

                <button
                onClick={ AddData } 
                disabled={ loading }
                className="rounded-full disabled:cursor-not-allowed shadow text-white font-semibold mt-5 p-1 bg-zinc-700 transition-colors">
                     { (loading) ? "Posting..." : "Add" }
                </button>
            </form>

            <div className="w-52 bg-emerald-100 text-emerald-800 p-2 px-4 mt-4 rounded-md mx-auto">
                <h1>welcome <span className="font-semibold"> {session?.user?.name} </span> </h1>
                <p>id { session?.user.id }</p>
            </div>
        </>
    );
};

export default AddPg;
