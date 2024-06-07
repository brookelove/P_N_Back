const { Money } = require("../models");

const moneyController = {
  //get all money
  async getMoney(req, res) {
    try {
      const dbMoneyData = await Money.find().select("-__v");

      res.json(dbMoneyData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single money by id
  async getSingleMoney(req, res) {
    try {
      const dbMoneyData = await Money.findOne({
        _id: req.params.MoneyId,
      })
        .select("-__v")
        .populate("clients")
        .populate("work")
        .populate("artist");

      if (!dbMoneyData) {
        return res.status(404).json({ message: "No money with this id!" });
      }

      res.json(dbMoneyData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new money
  async createMoney(req, res) {
    try {
      const dbMoneyData = await Money.create(req.body);
      res.json(dbMoneyData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a money
  async updateMoney(req, res) {
    try {
      const dbMoneyData = await Money.findOneAndUpdate(
        { _id: req.params.moneyId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbMoneyData) {
        return res.status(404).json({ message: "No money with this id!" });
      }

      res.json(dbMoneyData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete Money
  async deleteMoney(req, res) {
    try {
      const dbMoneyData = await Money.findOneAndDelete({
        _id: req.params.moneyId,
      });

      if (!dbMoneyData) {
        return res.status(404).json({ message: "No money with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = moneyController;
