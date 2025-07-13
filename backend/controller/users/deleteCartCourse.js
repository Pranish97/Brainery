const cartModel = require("../../models/cartModel");

async function deleteCartCourse(req, res) {
  try {
    const courseId = req?.body;

    const deleteCourse = await cartModel.deleteOne({ _id: courseId });

    res.status(200).json({
      message: "Removed from Cart Successfully!",
      data: deleteCourse,
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

module.exports = deleteCartCourse;
