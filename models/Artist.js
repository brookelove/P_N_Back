const { Schema, model } = require("mongoose");

const artistSchema = new Schema(
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
    style_of_work: {
      type: String,
    },
    summary: {
      type: String,
      maxlength: 400,
      required: true,
    },
    contact_preffered: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    hide_email: {
      type: Boolean,
      required: true,
    },
    hide_phone: {
      type: Boolean,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[0-9]{10}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
    },
    clients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Client",
      },
    ],
    work: [
      {
        type: Schema.Types.ObjectId,
        ref: "Work",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "Artist",
      },
    ],
    shop: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

artistSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Hashing the password before saving
artistSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// Method to compare passwords
artistSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const Artist = model("Artist", artistSchema);

module.exports = Artist;
