const cartModel = require("../../models/cartModel");

async function getCartCourse(req, res) {
  try {
    const currentUser = req.userId;
    const cartCourse = await cartModel
      .find({
        userId: currentUser,
      })
      .populate("courseId");

    res.status(200).json({
      message: "Cart Course.",
      data: cartCourse,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      succss: false,
    });
  }
}

module.exports = getCartCourse;
