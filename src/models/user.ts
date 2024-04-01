import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
    } ,
    googleAuth : {
        type : Boolean,
        default : false
    } ,
    picture : {
        type : String ,
    } ,
    reviews : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Review"
    }] ,
    pg : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Pg"
    }]
  });

  const User = mongoose.models?.User || mongoose.model("User" , userSchema );
  
  export default User