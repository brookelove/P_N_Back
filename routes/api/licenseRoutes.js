const router = require("express").Router();
const {
  getLicense,
  getSingleLicense,
  createLicense,
  updateLicense,
  deleteLicense,
} = require("../../controllers/license-controller");

// /api/license
router.route("/").get(getLicense).post(createLicense);

// /api/license/:licenseId
router
  .route("/:licenseId")
  .get(getSingleLicense)
  .put(updateLicense)
  .delete(deleteLicense);

module.exports = router;
