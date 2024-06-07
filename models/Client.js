const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[0-9]{10}$/,
    },
    password: {
      type: String,
      required: true,
    },
    photo_id: {
      type: String,
      required: true,
    },
    signedForms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Form",
      },
    ],
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notes",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

clientSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// Hashing the password before saving
clientSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// Method to compare passwords
clientSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const Client = model("Client", clientSchema);
module.exports = Client;
