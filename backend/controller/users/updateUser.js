const userModel = require("../../models/userModel");

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;

    const { userId, email, name, role } = req.body;
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };

    const updateUser = await userModel.findByIdAndUpdate(userId, payload);

    res.status(200).json({
      data: updateUser,
      message: "User Updated Successfully!",
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

module.exports = updateUser;
