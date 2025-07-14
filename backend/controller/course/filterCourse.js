const courseModel = require("../../models/courseModel");

async function filterCourse(req, res) {
  try {
    const { category } = req.params;

    const filterCategoryProduct = await courseModel.find({ category });

    res.status(200).json({
      message: "Filter Course By category",
      data: filterCategoryProduct,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

module.exports = filterCourse;
