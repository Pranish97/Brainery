const courseModel = require("../../models/courseModel");

async function getCategoryWiseCourse(req, res) {
  try {
    const { category } = req?.body || res.query;
    const course = await courseModel.find({ category });

    res.status(200).json({
      messsage: "Categroy Wise Course",
      data: course,
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

module.exports = getCategoryWiseCourse;
