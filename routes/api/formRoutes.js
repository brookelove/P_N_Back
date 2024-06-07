const router = require("express").Router();
const {
  getForm,
  getSingleForm,
  createForm,
  updateForm,
} = require("../../controllers/form-controller");

// /api/form
router.route("/").get(getForm).post(createForm);

// /api/Form/:formId
router.route("/:formId").get(getSingleForm).put(updateForm);

module.exports = router;
