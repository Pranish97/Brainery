const userModel = require("../models/userModel");

const addCoursePermission = async (userId) => {
  const user = await userModel.findById(userId);

  if (user !== "Admin") {
    return false;
  }

  return true;
};

module.exports = addCoursePermission;
