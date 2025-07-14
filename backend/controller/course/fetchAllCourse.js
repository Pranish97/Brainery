const courseModel = require("../../models/courseModel");

async function fetchAllCourse(req, res) {
  try {
    const data = await courseModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "All Course",
      data: data,
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

module.exports = fetchAllCourse;
