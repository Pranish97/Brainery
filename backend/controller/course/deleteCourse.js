const courseModel = require("../../models/courseModel");

async function deleteCourse(req, res) {
  try {
    const courseId = req.body?._id;
    const deleteCourse = await courseModel.deleteOne({ _id: courseId });

    res.status(200).json({
      message: "Course Deleted Successfully!",
      success: true,
      error: false,
      data: deleteCourse,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = deleteCourse;
