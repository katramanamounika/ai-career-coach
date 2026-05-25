const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createATS,
  getATS,
} = require("../controllers/atsController");

router.post("/", protect, createATS);

router.get("/", protect, getATS);

module.exports = router;