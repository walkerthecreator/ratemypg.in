import mongoose from "mongoose"

// Define the schema for the Reviews collection
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  name : {
    type : String ,
    required : true
  },
  sector : {
    type : String ,
    required : true
  },
  photo: {
    type: String
  },
  type : {
    type : String ,
    required : true
  },
  reviewText: {
    type: String,
    required: true,
    maxlength: 300
  },
  Bathroom: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  Environment: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  Location: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  Room: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  overallRating: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
} );



// Define the schema for the Photos collection
// const photoSchema = new mongoose.Schema({
//   photoUrl: {
//     type: String,
//     required: true
//   }
// });

// Create the models using the defined schemas
const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

// const Photo = mongoose.model('Photo', photoSchema);

// module.exports = {
//   Review,
//   User,
//   Photo
// };


export default Review 