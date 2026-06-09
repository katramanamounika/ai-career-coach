const fs = require("fs");
const pdfParse = require("pdf-parse");
const extractSkills=require("../services/skillExtractor");
const detectRole = require("../services/roleDetector");
const uploadResume = async (req, res) => {

    try {

        const pdfPath = req.file.path;

        const dataBuffer = fs.readFileSync(pdfPath);

        const pdfData = await pdfParse(dataBuffer);
        const extractedSkills=extractSkills(pdfData.text);
        const detectedRole =detectRole(extractedSkills);
        res.status(200).json({

    success: true,
    extractedSkills,
    detectedRole,
    extractedText: pdfData.text

});

    } catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: error.message
    });

}

};

module.exports = { uploadResume };