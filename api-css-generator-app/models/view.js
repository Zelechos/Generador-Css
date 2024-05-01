const mongoose = require("mongoose");
const viewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  codeCss: { type: String, required: true },
  codeHtml: { type: String, required: true },
});
module.exports = mongoose.model("View", viewSchema);