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
    type: Float,
    required: true,
  },
  tip: {
    type: Float,
    required: true,
  },
  total: {
    type: Float,
    required: true,
  },
  percentage: {
    type: Float,
    required: true,
  },
  work: {
    type: Schema.Types.ObjectId,
    ref: "Work",
  },
});

const Money = model("Money", moneySchema);
module.exports = Money;
