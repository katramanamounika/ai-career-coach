const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  signupUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

const router = express.Router();


// Signup Route
router.post("/signup", signupUser);


// Login Route
router.post("/login", loginUser);


// Protected Route
router.get("/me", protect, getCurrentUser);


module.exports = router;