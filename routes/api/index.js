const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const userRoutes = require("./userRoutes");

router.use("/artists", artistRoutes);
router.use("/users", userRoutes);

module.exports = router;
