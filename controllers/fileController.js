// backend/controllers/fileController.js
const path = require('path');
const fs = require('fs');

// Handle file upload
exports.uploadFile = async (req, res) => {
  if (!req.file) return res.status(400).json({ msg: 'No file uploaded' });

  res.json({
    filename: req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size
  });
};

// Handle file download
exports.downloadFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '..', 'uploads', filename);

  if (!fs.existsSync(filePath)) return res.status(404).json({ msg: 'File not found' });

  res.download(filePath);
};
