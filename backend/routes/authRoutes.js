const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  signupUser,
  loginUser,
  getCurrentUser,
  forgotPassword,
  resetPassword,
  googleAuth
} = require("../controllers/authController");


// Signup Route
router.post("/signup", signupUser);


// Login Route
router.post("/login", loginUser);
router.post("/google", googleAuth);


// Protected Route
router.get("/me", protect, getCurrentUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Test route working",
  });
});
module.exports = router;