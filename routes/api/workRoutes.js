const router = require("express").Router();
const {
  getWorks,
  getSingleWork,
  createWork,
  updateWork,
  deleteWork,
} = require("../../controllers/work-controllers");

// /api/work
router.route("/").get(getWorks).post(createWork);

// /api/work/:worksId
router.route("/:WorksId").get(getSingleWork).put(updateWork).delete(deleteWork);

module.exports = router;
