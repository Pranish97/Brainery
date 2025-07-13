const cartModel = require("../../models/cartModel");

async function addToCart(req, res) {
  try {
    const sesssionUser = req.userId;

    const { courseId } = req?.body;

    const courseExists = await cartModel.findOne({
      userId: sesssionUser,
      courseId: courseId,
    });

    if (courseExists) {
      return res.json({
        message: "Course Already Exists",
        success: false,
        error: true,
      });
    }

    const payload = {
      courseId: courseId,
      userId: sesssionUser,
    };

    const addToCart = new cartModel(payload);

    const saveCourse = await addToCart.save();

    res.status(200).json({
      message: "Course Added To Cart Successfully!",
      data: saveCourse,
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

module.exports = addToCart;
