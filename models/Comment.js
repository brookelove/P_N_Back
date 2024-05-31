const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
const Comment = model("Comment", commentSchema);

module.exports = Comment;
