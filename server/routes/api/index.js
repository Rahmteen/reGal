const router = require("express").Router();
const userRoutes = require("./user");

//appends /user to routes
//route looks like /api/user/

router.use("/user", userRoutes);

module.exports = router