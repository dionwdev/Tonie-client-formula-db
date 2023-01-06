const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const customersController = require("../controllers/customers");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/:id", ensureAuth, customersController.getCustomer);

router.post("/createCustomer", customersController.createCustomer);

router.delete("/deleteCustomer/:id", customersController.deleteCustomer);

module.exports = router;
