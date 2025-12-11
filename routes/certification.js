// routes/certification.js
console.log('📂 certification.js LOADED!');

const express = require('express');
const supabase = require('../utils/supabaseClient');
const verifyJwt = require('../utils/verifyJwt');

const router = express.Router();

// 🔧 Diagnostic route
router.get('/ping', (req, res) => {
  console.log('📡 Ping received on /certification/ping');
  res.send('pong');
});

router.post('/', async (req, res) => {
  console.log('📥 POST /certification hit');
  try {
    const jwt = req.headers.authorization?.split(' ')[1];
    const userId = await verifyJwt(jwt);

    if (!req.files?.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.files.file;
    const path = `${userId}/${file.name}`;

    const { error } = await supabase.storage
      .from('certifications')
      .upload(path, file.data, {
        contentType: file.mimetype,
        upsert: true
      });

    if (error) throw error;

    res.json({ success: true, path });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: err.message });
  }
});

module.exports = router;