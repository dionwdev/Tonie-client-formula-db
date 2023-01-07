const User = require("../models/User");


module.exports = {


  getIndex: async (req, res) => {
    try {
      const user = await User.find({ user: req.id });
      res.render("index.ejs", {user: req.id });
    } catch (err) {
      console.log(err);
    }
  },

}