const router = require("express").Router();
const itemRoutes = require("./items");
const AuthRoutes = require("./AuthRoutes");

// Book routes
router.use("/items", itemRoutes);
router.use("/users", AuthRoutes);

module.exports = router;