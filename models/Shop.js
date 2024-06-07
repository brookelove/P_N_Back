const { Schema, model } = require("mongoose");
const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  established: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
});

const Shop = model("Shop", shopSchema);
module.exports = Shop;
