const Formula = require("../models/Formula");
const User = require("../models/User");

module.exports = {
  createFormula: async (req, res) => {
    try {
      const formulaUser = await User.findById(req.user.id)
      await Formula.create({
        entryType: req.body.entryType,
        title: req.body.title,
        entry: req.body.entry,
        customer: req.params.id,
        createdBy: formulaUser.userName,
        createdById: req.user.id
      });
      console.log("Formula has been added!");
      res.redirect("/customer/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  //! Added delete formula method
  deleteFormula: async (req, res) => {
    try {
      await Formula.deleteOne({ _id: req.params.formulaid })
      console.log("formula removed")
      res.redirect("/customer/"+req.params.customerid);
    } catch (err) {
      console.log(err);
    }
  }
};
