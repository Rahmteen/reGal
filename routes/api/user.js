const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// @route GET api/users/get
// @desc Retrieve user
// @access Public
router.route("/get/:id").get(userController.get);

// @route POST api/users/create
// @desc Register user
// @access Public
router.route("/create").post(userController.create);

// @route PUT api/users/update
// @desc Update user records
// @access Public
router.route("/update").put(userController.update);

// @route DELETE api/users/delete
// @desc Remove user from database
// @access Public
router.route("/delete").delete(userController.delete);

module.exports = router;