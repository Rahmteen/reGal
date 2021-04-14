const router = require("express").Router();
const apiRoutes = require("./api");

//adds /api to apiRoutes
router.use("/api", apiRoutes);

module.exports = router;