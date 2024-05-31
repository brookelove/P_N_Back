const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Notes = model("Notes", notesSchema);

module.exports = Notes;
