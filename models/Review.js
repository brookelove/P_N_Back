const { Schema, model } = require("mongoose");
const reviewSchema = new Schema({
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  review: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Review = model("Review", reviewSchema);
module.exports = Review;
