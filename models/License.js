const { Schema, model } = require("mongoose");
const licenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: Date,
  },
});

const License = model("License", licenseSchema);
module.exports = License;
