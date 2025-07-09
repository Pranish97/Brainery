const express = require("express");

const router = express.Router();

const userRegister = require("../controller/userRegister");
const userLogin = require("../controller/userLogin");
const userDetails = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/user-details", authToken, userDetails);
router.get("/userLogout", userLogout);

// Admin Panel
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

module.exports = router;
