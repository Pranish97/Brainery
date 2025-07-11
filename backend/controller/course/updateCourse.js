const addCoursePermission = require("../../helpers/permission");
const courseModel = require("../../models/courseModel");

async function updateCourse(req, res) {
  try {
    if (!addCoursePermission(req.userId)) {
      throw new Error("Permission Denied");
    }

    const { _id, ...resBody } = req.body;

    const updateCors = await courseModel.findByIdAndUpdate(_id, resBody);

    res.status(200).json({
      message: "Course Updated Successfully!",
      data: updateCors,
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

module.exports = updateCourse;
