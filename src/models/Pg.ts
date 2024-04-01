import mongoose from "mongoose"

const pgSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Missing Pg name"]
    } ,
    reviews : [{ 
                type : mongoose.Schema.Types.ObjectId ,
                ref : 'Review'
             }],
    type : {
        type : String ,
        required : [true , "Missing type of accomodation"]
    } ,
    sector : {
        type : String ,
        required : [true , "Missing sector name"]
    } ,
    location : {
        type : String ,
        required : [true , "Missing pg location"]
    } ,
    owner : {
        type : String 
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
    }
} , {
    timestamps : true
})

const Pg = mongoose.models.Pg || mongoose.model("Pg" , pgSchema )

export default Pg