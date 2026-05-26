const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

const protect  = require("../middleware/authMiddleware");
// REGISTER ROUTE
router.post("/register", registerUser);

// LOGIN ROUTE
router.post("/login", loginUser);
router.get("/me", protect, getCurrentUser);
module.exports = router;
