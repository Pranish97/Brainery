const courseModel = require("../../models/courseModel");

async function courseDetails(req, res) {
  try {
    const { courseId } = req.body;

    const course = await courseModel.findById(courseId);

    res.status(200).json({
      message: "Course Details",
      data: course,
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

module.exports = courseDetails;
