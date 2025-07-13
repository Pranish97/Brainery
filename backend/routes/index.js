const express = require("express");
const userRegister = require("../controller/users/userRegister");
const userLogin = require("../controller/users/userLogin");
const userDetails = require("../controller/users/userDetails");
const userLogout = require("../controller/users/userLogout");
const allUsers = require("../controller/users/allUsers");
const updateUser = require("../controller/users/updateUser");
const addCourses = require("../controller/course/addCourses");
const getCourse = require("../controller/course/getCourse");
const authToken = require("../middleware/authToken");
const deleteCourse = require("../controller/course/deleteCourse");
const updateCourse = require("../controller/course/updateCourse");
const getCategoryWiseCourse = require("../controller/course/getCategoryWiseCourse");
const courseDetails = require("../controller/course/courseDetails");
const addToCart = require("../controller/users/addToCart");
const getCartCourse = require("../controller/users/getCartCourse");
const deleteCartCourse = require("../controller/users/deleteCartCourse");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/user-details", authToken, userDetails);
router.get("/userLogout", userLogout);

// Admin Panel
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.post("/add-course", authToken, addCourses);
router.get("/get-course", authToken, getCourse);
router.post("/delete-course", authToken, deleteCourse);
router.post("/update-course", authToken, updateCourse);

// Home Page
router.post("/category-course", getCategoryWiseCourse);

router.post("/course-detail", courseDetails);

router.post("/add-to-cart", authToken, addToCart);
router.get("/get-cartCourse", authToken, getCartCourse);
router.post("/delete-cartCourse", authToken, deleteCartCourse);

module.exports = router;
