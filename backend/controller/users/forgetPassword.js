const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const sendMail = require("../../utils/mailSender");

async function forgetPassword(req, res) {
  try {
    const { email } = req?.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).json({
        message: "User Doesnt Exists!",
        success: false,
        error: true,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "15m",
    });

    const resetLink = `http://localhost:3000/reset-password/${token}`;

    const html = `
      <h2>Password Reset</h2>
      <p>Click below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
    `;

    await sendMail(user.email, "Password Reset Request", html);

    res.status(200).json({
      message: "Password Rest set Link Sent",
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

module.exports = forgetPassword;
