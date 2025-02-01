const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configurer Multer pour stocker les fichiers uploadés
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded." });
  }
  res.json({ message: "Upload done", file: req.file.filename });
});

module.exports = router;
