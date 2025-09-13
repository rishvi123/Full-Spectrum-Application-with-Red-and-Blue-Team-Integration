// backend/server.js
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// connect DB
connectDB();

// middleware
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // change if frontend uses a different port

// ensure uploads folder exists
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/files', require('./routes/files'));

// basic root route
app.get('/', (req, res) => res.send('Backend up'));

// error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ msg: 'Server error' });
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
