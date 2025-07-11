const userModel = require("../../models/userModel");

async function userDetails(req, res) {
  try {
    const user = await userModel.findById(req.userId);

    res.status(200).json({
      data: user,
      message: "User Details",
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userDetails;
