// backend/routes/files.js
const express = require('express');
const path = require('path');
const multer = require('multer');
const auth = require('../middleware/auth');
const { uploadFile, downloadFile } = require('../controllers/fileController');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Routes
router.post('/upload', auth, upload.single('file'), uploadFile);
router.get('/download/:filename', auth, downloadFile);

module.exports = router;
