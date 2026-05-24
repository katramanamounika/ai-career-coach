const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
// REGISTER ROUTE
router.post("/register", registerUser);

// LOGIN ROUTE
router.post("/login", loginUser);
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});
module.exports = router;
