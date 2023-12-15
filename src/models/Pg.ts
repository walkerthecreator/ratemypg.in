import mongoose from "mongoose"

const pgSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    } ,
    sector : {
        location : String ,
    } ,
    location : {
        type : String ,
        required : true    
    } ,
    owner : {
        name : {
            type : String 
        } ,
        contact : {
            type : Number 
        }   
    } ,
    postedBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
    }
} , {
    timestamps : true
})

const Pg = mongoose.models.Pg || mongoose.model("Pg" , pgSchema )

export default Pg