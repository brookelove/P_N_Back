const { Shop } = require("../models");

const shopController = {
  //get all shops
  async getShops(req, res) {
    try {
      const dbShopsData = await Shop.find().select("-__v").populate("artists");

      res.json(dbShopsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single shop by id
  async getSingleShop(req, res) {
    try {
      const dbShopsData = await Shop.findOne({
        _id: req.params.shopId,
      })
        .select("-__v")
        .populate("artists");

      if (!dbShopsData) {
        return res.status(404).json({ message: "No shop with this id!" });
      }
      res.json(dbShopsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new shop
  async createShop(req, res) {
    try {
      const dbShopsData = await Shop.create(req.body);
      res.json(dbShopsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a shop
  async updateShop(req, res) {
    try {
      const dbShopsData = await Shop.findOneAndUpdate(
        { _id: req.params.shopId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbShopsData) {
        return res.status(404).json({ message: "No shop with this id!" });
      }

      res.json(dbShopsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete shop
  async deleteShop(req, res) {
    try {
      const dbShopsData = await Shop.findOneAndDelete({
        _id: req.params.ShopId,
      });

      if (!dbShopsData) {
        return res.status(404).json({ message: "No shop with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = shopController;
