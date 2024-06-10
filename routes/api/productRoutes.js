const router = require("express").Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/product-controllers");

// /api/products
router.route("/").get(getProducts).post(createProduct);

// /api/products/:productsId
router
  .route("/:productsId")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
