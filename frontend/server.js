const express = require('express');
const path = require('path');
const app = express();

// --- PENJELASAN PERUBAHAN #1 ---
// Kita paksa server untuk menggunakan port 10000 yang diharapkan oleh Railway.
// process.env.PORT adalah variabel yang secara otomatis diberikan oleh banyak platform hosting.
const port = process.env.PORT || 10000;

// Baris ini sudah benar, menyajikan semua file statis.
app.use(express.static(__dirname));

// --- PENJELASAN PERUBAHAN #2 ---
// Kita tambahkan '0.0.0.0' di sini. Ini sangat penting.
// Ini memberitahu server untuk menerima koneksi dari luar kontainernya
// (yaitu dari sistem Railway), bukan hanya dari 'localhost' internal.
app.listen(port, '0.0.0.0', () => {
  console.log(`Server Express berjalan dengan sukses di port ${port}`);
});