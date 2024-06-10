const router = require("express").Router();
const {
  getReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../../controllers/review-controllers");

// /api/reviews
router.route("/").get(getReviews).post(createReview);

// /api/reviews/:reviewsId
router
  .route("/:ReviewsId")
  .get(getSingleReview)
  .put(updateReview)
  .delete(deleteReview);

module.exports = router;
