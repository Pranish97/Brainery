const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function resetPassword(req, res) {
  try {
    const { token, newPassword } = req?.body;

    if (!token || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Missing token or password",
        error: true,
      });
    }

    let decoded;

    decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found", error: true });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(newPassword, salt);

    user.password = hashPassword;

    await user.save();

    res.status(200).json({
      message: "Password Reset Successfully!",
      data: user,
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

module.exports = resetPassword;
