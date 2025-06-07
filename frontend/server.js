const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 10000;

// CUKUP DENGAN BARIS INI.
// Express akan secara cerdas menyajikan semua file dari dalam folder 'public'.
// Termasuk index.html, output.css, dan semua file di dalam Pages/.
app.use(express.static(path.join(__dirname, 'public')));

// Perintah listen HARUS berada setelah semua konfigurasi 'app.use' atau 'app.get'.
app.listen(port, '0.0.0.0', () => {
  console.log(`Server Express berjalan dengan sukses di port ${port}`);
});