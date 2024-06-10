const router = require("express").Router();
const {
  getForms,
  getSingleForm,
  createForm,
  updateForm,
} = require("../../controllers/form-controllers");

// /api/form
router.route("/").get(getForms).post(createForm);

// /api/Form/:formId
router.route("/:formId").get(getSingleForm).put(updateForm);

module.exports = router;
