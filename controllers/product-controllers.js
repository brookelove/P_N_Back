const { Products } = require("../models");

const productController = {
  //get all products
  async getProducts(req, res) {
    try {
      const dbProductsData = await Products.find()
        .select("-__v")
        .populate("artists");

      res.json(dbProductsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single product by id
  async getSingleProduct(req, res) {
    try {
      const dbProductsData = await Products.findOne({
        _id: req.params.productsId,
      })
        .select("-__v")
        .populate("artists");

      if (!dbProductsData) {
        return res.status(404).json({ message: "No product with this id!" });
      }

      res.json(dbProductsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new product
  async createProduct(req, res) {
    try {
      const dbProductsData = await Products.create(req.body);
      res.json(dbProductsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a products
  async updateProduct(req, res) {
    try {
      const dbProductsData = await Products.findOneAndUpdate(
        { _id: req.params.productId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbProductsData) {
        return res.status(404).json({ message: "No products with this id!" });
      }

      res.json(dbProductsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete Products
  async deleteProduct(req, res) {
    try {
      const dbProductsData = await Products.findOneAndDelete({
        _id: req.params.productId,
      });

      if (!dbProductsData) {
        return res.status(404).json({ message: "No product with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = productController;
