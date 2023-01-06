const mongoose = require("mongoose");

const FormulaSchema = new mongoose.Schema({
  entryType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },  
  //! Added new schema properties to link comments to users - username for attribution, ID for show/hide delete button
  createdBy: {
    type: String,
    ref: "User",
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  //! end changes
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Formula", FormulaSchema);
