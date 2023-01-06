const cloudinary = require("../middleware/cloudinary");
const Customer = require("../models/Customer");
const Formula = require("../models/Formula");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const customers = await Customer.find({ user: req.user.id });
      res.render("profile.ejs", { customers: customers, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getCustomer: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      const formulas = await Formula.find({customer: req.params.id}).sort({ createdAt: "asc" }).lean();
      res.render("customer.ejs", { customer: customer, user: req.user, formulas: formulas });
    } catch (err) {
      console.log(err);
    }
  },
  createCustomer: async (req, res) => {
    try {
     
      await Customer.create({
        name: req.body.name,
        contact: req.body.contact,
        user: req.user.id,
      });
      console.log("Person has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      // Find customer by id
      let customer = await Customer.findById({ _id: req.params.id });
      // Delete customer from db
      await Customer.remove({ _id: req.params.id });
      console.log("Deleted Person");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
