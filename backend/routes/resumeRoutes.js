const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");
const { spawn } = require("child_process");

const {
  uploadResume,
} = require("../controllers/resumeController");


// STORAGE SETTINGS
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }

});


// FILE FILTER
const fileFilter = (req, file, cb) => {

  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files allowed"), false);
  }

};


// MULTER CONFIG
const upload = multer({

  storage: storage,
  fileFilter: fileFilter

});


// UPLOAD ROUTE
router.post(

  "/upload",
  upload.single("resume"),
  uploadResume

);


// ANALYZE ROUTE
router.post(

  "/analyze",
  upload.single("resume"),

  async (req, res) => {

    try {

      const role = req.body.role;

      const resumePath = req.file.path;

      const pythonProcess = spawn(
        "python",
        [
          "./resume-analyzer/main.py",
          resumePath,
          role
        ]
      );

      let result = "";
      let errorOutput = "";

      pythonProcess.stdout.on(
        "data",
        (data) => {

          result += data.toString();

        }
      );

      pythonProcess.stderr.on(
        "data",
        (data) => {

          errorOutput += data.toString();

        }
      );

      pythonProcess.on(
        "close",
        (code) => {

          console.log("Python Output:", result);

          console.log("Python Error:", errorOutput);

          if (errorOutput) {

            return res.status(500).json({
              error: errorOutput
            });

          }

          try {

            const parsedData =
              JSON.parse(result);

            res.json(parsedData);

          } catch (error) {

            console.log(
              "JSON Parse Error:",
              error
            );

            res.status(500).json({
              error:
                "Invalid JSON returned from Python"
            });

          }
        }
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error: "Server Error"
      });

    }
  }
);

module.exports = router;