const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");

async function userRegister(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error("User Already Exist");
    }

    if (!email) {
      throw new Error("Please Provide Email");
    }

    if (!password) {
      throw new Error("Please Provide Password");
    }

    if (!name) {
      throw new Error("Please Provide Name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Somthing Is wrong");
    }

    const payload = {
      ...req.body,
      role: "Normal",
      password: hashPassword,
    };
    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      message: "User Registred Successfully",
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

module.exports = userRegister;
