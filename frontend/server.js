const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 10000;

// Baris ini adalah satu-satunya yang kita butuhkan.
// Ia akan menyajikan semua file (HTML, CSS, JS, gambar) dari
// direktori 'frontend/' secara cerdas.
// - Permintaan ke '/' akan menyajikan 'index.html'.
// - Permintaan ke '/Pages/login.html' akan menyajikan file 'Pages/login.html'.
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server Express berjalan dengan sukses di port ${port}`);
});