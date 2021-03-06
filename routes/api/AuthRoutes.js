const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.loginUser);

module.exports = router;