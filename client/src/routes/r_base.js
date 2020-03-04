const router = require("express").Router();
const controller = require("../controllers/c_base");

router.get("/", controller.base);

module.exports = router;