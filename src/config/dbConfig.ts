import mongoose from "mongoose"

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const db = mongoose.connection
        

        db.on("error" , (err)=>{
            console.log("something went wrong with database!")
            console.log(err)
            process.exit()
        })

        db.once("open" , ()=>{
            console.log("connected with atlas")
        })
        
    }
    catch(err){
        console.log("something goes wrong!")
        console.log(err)
    }
}
