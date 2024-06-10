const router = require("express").Router();
const {
  getShops,
  getSingleShop,
  createShop,
  updateShop,
  deleteShop,
} = require("../../controllers/shop-controllers");

// /api/shops
router.route("/").get(getShops).post(createShop);

// /api/shops/:shopsId
router.route("/:ShopsId").get(getSingleShop).put(updateShop).delete(deleteShop);

module.exports = router;
