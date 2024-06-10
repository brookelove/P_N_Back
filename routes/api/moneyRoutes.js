const router = require("express").Router();
const {
  getMoney,
  getSingleMoney,
  createMoney,
  updateMoney,
  deleteMoney,
} = require("../../controllers/money-controllers");

// /api/money
router.route("/").get(getMoney).post(createMoney);

// /api/money/:moneyId
router
  .route("/:moneyId")
  .get(getSingleMoney)
  .put(updateMoney)
  .delete(deleteMoney);

module.exports = router;
