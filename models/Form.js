const { Schema, model } = require("mongoose");

const formSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  form: {
    type: String,
    required: true,
  },
});

const Form = model("Form", formSchema);
model.exports = Form;
