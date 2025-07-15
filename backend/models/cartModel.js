const mongoose = require("mongoose");

const addToCart = mongoose.Schema(
  {
    courseId: {
      ref: "course",
      type: String,
    },
    userId: String,
  },
  {
    timestamp: true,
  }
);

const cartModel = mongoose.model("carts", addToCart);

module.exports = cartModel;
