const router = require("express").Router();
const controller = require("../controllers/c_accueil");

router.get("/", controller.afficher);


module.exports = router;