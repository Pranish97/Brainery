const courseModel = require("../../models/courseModel");

async function getCourse(req, res) {
  try {
    const data = await courseModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "All Courses",
      data: data,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = getCourse;
