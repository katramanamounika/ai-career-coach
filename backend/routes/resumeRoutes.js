const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const resumeController = require("../controllers/resumeController");

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  resumeController.uploadResume
);

router.get(
  "/my-resumes",
  protect,
  resumeController.getMyResumes
);

router.delete(
  "/:id",
  protect,
  resumeController.deleteResume
);

module.exports = router;