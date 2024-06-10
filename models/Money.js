const { Schema, model } = require("mongoose");
const moneySchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  price: {
    type: Number,
    required: true,
  },
  tip: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  work: {
    type: Schema.Types.ObjectId,
    ref: "Work",
  },
});

const Money = model("Money", moneySchema);
module.exports = Money;
