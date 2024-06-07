const { Comment, Client } = require("../models");

const commentController = {
  // get all comments
  async getComments(req, res) {
    try {
      const dbCommentData = await Comment.find().sort({ createdAt: -1 });

      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single comment by id
  async getSingleComment(req, res) {
    try {
      const dbCommentData = await Comment.findOne({
        _id: req.params.commentId,
      });

      if (!dbCommentData) {
        return res.status(404).json({ message: "No comment with this id!" });
      }

      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a Comment
  async createComment(req, res) {
    try {
      const dbCommentData = await Comment.create(req.body);

      const dbClientData = await Client.findOneAndUpdate(
        { _id: req.body.clientId },
        { $push: { Comments: dbCommentData._id } },
        { new: true }
      );

      if (!dbClientData) {
        return res
          .status(404)
          .json({ message: "Comment created but no client with this id!" });
      }

      res.json({ message: "Comment successfully created!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update Comment
  async updateComment(req, res) {
    const dbCommentData = await Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!dbCommentData) {
      return res.status(404).json({ message: "No comment with this id!" });
    }

    res.json(dbCommentData);

    console.log(err);
    res.status(500).json(err);
  },
  // delete Comment
  async deleteComment(req, res) {
    try {
      const dbCommentData = await Comment.findOneAndRemove({
        _id: req.params.commentId,
      });

      if (!dbCommentData) {
        return res.status(404).json({ message: "No Comment with this id!" });
      }

      // remove Comment id from client's `Comments` field
      const dbClientData = Client.findOneAndUpdate(
        { Comments: req.params.commentId },
        { $pull: { Comments: req.params.commentId } },
        { new: true }
      );

      if (!dbClientData) {
        return res
          .status(404)
          .json({ message: "Comment created but no client with this id!" });
      }

      res.json({ message: "Comment successfully deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add a reaction to a Comment
  async addReaction(req, res) {
    try {
      const dbCommentData = await Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!dbCommentData) {
        return res.status(404).json({ message: "No comment with this id!" });
      }

      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // remove reaction from a Comment
  async removeReaction(req, res) {
    try {
      const dbCommentData = await Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!dbCommentData) {
        return res.status(404).json({ message: "No comment with this id!" });
      }

      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = commentController;
