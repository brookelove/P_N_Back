const { Review } = require("../models");

const reviewController = {
  //get all Reviews
  async getReviews(req, res) {
    try {
      const dbReviewsData = await Review.find()
        .select("-__v")
        .populate("clients")
        .populate("artists");

      res.json(dbReviewsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single Review by id
  async getSingleReview(req, res) {
    try {
      const dbReviewsData = await Review.findOne({
        _id: req.params.reviewsId,
      })
        .select("-__v")
        .populate("client")
        .populate("artist");

      if (!dbReviewsData) {
        return res.status(404).json({ message: "No review with this id!" });
      }
      res.json(dbReviewsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new Review
  async createReview(req, res) {
    try {
      const dbReviewsData = await Review.create(req.body);
      res.json(dbReviewsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a Review
  async updateReview(req, res) {
    try {
      const dbReviewsData = await Review.findOneAndUpdate(
        { _id: req.params.reviewId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbReviewsData) {
        return res.status(404).json({ message: "No review with this id!" });
      }

      res.json(dbReviewsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete Reviews
  async deleteReview(req, res) {
    try {
      const dbReviewsData = await Review.findOneAndDelete({
        _id: req.params.ReviewId,
      });

      if (!dbReviewsData) {
        return res.status(404).json({ message: "No review with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = reviewController;
