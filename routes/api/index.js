const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const clientRoutes = require("./clientRoutes");
const formRoutes = require("./formRoutes");
const licenseRoutes = require("./licenseRoutes");
const moneyRoutes = require("./moneyRoutes");
const noteRoutes = require("./noteControllers");
const productRoutes = require("./productRoutes");
const reviewRoutes = require("./reviewRoutes");
const workRoutes = require("./workRoutes");

router.use("/artists", artistRoutes);
router.use("/clients", clientRoutes);
router.use("/forms", formRoutes);
router.use("license", licenseRoutes);
router.use("/money", moneyRoutes);
router.use("/notes", noteRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/work", workRoutes);

module.exports = router;
