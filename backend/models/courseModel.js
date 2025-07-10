const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    price: Number,
    discountPrice: Number,
    description: String,
    image: String,
    hours: String,
    creatorName: String,
    language: String,
  },
  {
    timestamps: true,
  }
);

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;
