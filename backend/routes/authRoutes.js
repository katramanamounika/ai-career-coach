const express = require("express");

const router = express.Router();

const {
  signupUser,
  loginUser,
  getCurrentUser,
  forgotPassword,
  resetPassword,
  googleAuth,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

// SIGNUP
router.post("/signup", signupUser);

// LOGIN
router.post("/login", loginUser);

// CURRENT USER
router.get("/me", protect, getCurrentUser);

// FORGOT PASSWORD
router.post("/forgot-password", forgotPassword);

// RESET PASSWORD
router.post("/reset-password", resetPassword);

// GOOGLE AUTH
router.post("/google", googleAuth);

module.exports = router;