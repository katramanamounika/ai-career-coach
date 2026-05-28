const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadResume,
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


// API ROUTE
router.post(
    "/upload",
    upload.single("resume"),
    uploadResume
);


module.exports = router;