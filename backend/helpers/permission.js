const userModel = require("../models/userModel");

const addCoursePermssion = async (userId) => {
  const user = await userModel.findById(userId);

  if (user !== "Admin") {
    return false;
  }

  return true;
};

module.exports = addCoursePermssion;
