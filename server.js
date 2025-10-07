// Import module yang dibutuhkan
const express = require('express');
const path = require('path');

// Inisialisasi app express
const app = express();

// Tentukan port
const PORT = 3000;

// Set folder public sebagai static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/kotoba', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kotoba.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
