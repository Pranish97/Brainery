const mongoose = require("mongoose");

const addToContact = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamp: true,
  }
);

const contactModel = mongoose.model("contacts", addToContact);

module.exports = contactModel;
