async function userLogout(req, res) {
  try {
    res.clearCookie("token");

    res.json({
      message: "User Logged Out Successfully",
      success: true,
      error: false,
      data: [],
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userLogout;
