const User = require("../models/User");


module.exports = {
  // getIndex: (req, res) => {
  //   res.render("index.ejs");
  // },

  getIndex: async (req, res) => {
    try {
      const user = await User.find({ user: req.id });
      res.render("index.ejs", {user: req.id });
    } catch (err) {
      console.log(err);
    }
  },

}