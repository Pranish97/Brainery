const addCoursePermssion = require("../helpers/permission");
const courseModel = require("../models/courseModel");

async function addCourses(req, res) {
  try {
    const sessionUser = req?.userId;

    if (!addCoursePermssion(sessionUser)) {
      throw new Error("Permission Denied!.");
    }

    const course = new courseModel(req.body);
    const saveCourse = await course.save();

    res.status(200).json({
      message: "Course Added Successfully!",
      success: true,
      error: false,
      data: saveCourse,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = addCourses;
