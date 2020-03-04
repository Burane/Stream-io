const express = require("express");
const router = express.Router();

router.use("/", require("./r_base"));
router.use("/accueil", require("./r_accueil"));
router.use(express.static(__basedir + "/static"));

module.exports = router;