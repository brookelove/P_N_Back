const { Work } = require("../models");

const workController = {
  //get all work
  async getWorks(req, res) {
    try {
      const dbWorksData = await Work.find().select("-__v");

      res.json(dbWorksData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single work by id
  async getSingleWork(req, res) {
    try {
      const dbWorksData = await Work.findOne({
        _id: req.params.workId,
      }).select("-__v");

      if (!dbWorksData) {
        return res.status(404).json({ message: "No work with this id!" });
      }
      res.json(dbWorksData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new work
  async createWork(req, res) {
    try {
      const dbWorksData = await Work.create(req.body);
      res.json(dbWorksData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update  work
  async updateWork(req, res) {
    try {
      const dbWorksData = await Work.findOneAndUpdate(
        { _id: req.params.workId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbWorksData) {
        return res.status(404).json({ message: "No work with this id!" });
      }

      res.json(dbWorksData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete Work
  async deleteWork(req, res) {
    try {
      const dbWorksData = await Work.findOneAndDelete({
        _id: req.params.workId,
      });

      if (!dbWorksData) {
        return res.status(404).json({ message: "No work with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = workController;
