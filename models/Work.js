const { Schema, model } = require("mongoose");

const workSchema = new Schema({
  client_img: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  hours: {
    type: Number,
  },
});
const Work = model("Work", workSchema);

module.exports = Work;
