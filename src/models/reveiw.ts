import mongoose from "mongoose";

// Define the schema for the Reviews collection
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  pg: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pg",
  },
  photo: {
    type: String,
  },
  review: {
    type: String,
    required: true,
    maxlength: 300,
  },
  rating : {
    bathroom: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    environment: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    location: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    room: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    overallRating: {
      type: Number,
      min: 1,
      max: 5,
    },
  } ,
  pros: {
    type: [String],
  },
  cons: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
