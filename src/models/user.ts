import mongoose from "mongoose"


// Define the schema for the Users collection
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
      required: true
    }
  });

  const User = mongoose.model("User" , userSchema )

  export default User