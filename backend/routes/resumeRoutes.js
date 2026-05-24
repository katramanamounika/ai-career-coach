const express = require("express");
const router = express.Router();

const {
  uploadResume,
  getUserResumes,
  deleteResume,
} = require("../controllers/resumeController");

const { protect } = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);
router.get(
  "/my-resumes",
  protect,
  getUserResumes
);
router.delete(
    "/:id",
    protect,
    deleteResume
);
module.exports = router;