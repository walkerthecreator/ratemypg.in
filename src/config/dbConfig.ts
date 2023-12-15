import mongoose from "mongoose"

export async function connect(){
    try{
        // mongoose.connect(process.env.MONGO_URI!)
        mongoose.connect("mongodb+srv://nitinjaswal:admin@cluster0.mdiiqwv.mongodb.net/ratemypg")
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
