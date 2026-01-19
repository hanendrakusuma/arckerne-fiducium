const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Menyajikan file statis (CSS/JS jika ada di folder publik)
app.use(express.static(path.join(__dirname, 'public')));

// Menampilkan file index.html saat domain diakses
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`ArcKernē Server aktif pada port ${port}`);
});