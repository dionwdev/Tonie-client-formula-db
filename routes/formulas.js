const express = require("express");
const router = express.Router();
const formulasController = require("../controllers/formulas");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//formula Routes - simplified for now
router.post("/createFormula/:id", formulasController.createFormula);
//! Added delete formula route
router.delete("/deleteFormula/:postid/:formulaid",formulasController.deleteFormula);


module.exports = router;
