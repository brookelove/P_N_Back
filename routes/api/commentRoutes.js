const router = require("express").Router();
const {
  getComment,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment,
  addReaction,
  removeReaction,
} = require("../../controllers/comment-controllers");

// /api/comment
router.route("/").get(getComment).post(createComment);

// /api/comment/:commentId
router
  .route("/:commentId")
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

// /api/comments/:commentId/reactions
router.route("/:commentId/reactions").post(addReaction);

// /api/comments/:commentId/reactions/:reactionId
router.route("/:commentId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
