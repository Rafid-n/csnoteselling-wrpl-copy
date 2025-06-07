const express = require('express');
    const path = require('path');

    const app = express();
    const port = process.env.PORT || 10000;

    // Menentukan direktori root untuk semua file statis (HTML, CSS, JS, gambar)
    const publicDirectoryPath = path.join(__dirname);

    // Menyajikan semua file dari direktori root proyek frontend
    app.use(express.static(publicDirectoryPath));

    // Aturan "catch-all" untuk menangani routing multi-halaman
    // Jika sebuah halaman seperti /Pages/login.html tidak ditemukan,
    // server akan mencoba mencarinya dari root.
    // Ini juga membantu untuk refresh halaman.
    app.get('*', (req, res) => {
      // Coba cari file yang cocok dengan path yang diminta
      const filePath = path.join(publicDirectoryPath, req.path);
      
      // Jika file ada, kirimkan. Jika tidak, kirim index.html sebagai fallback.
      res.sendFile(filePath, (err) => {
        if (err) {
          res.sendFile(path.join(publicDirectoryPath, 'index.html'));
        }
      });
    });

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server berjalan di port ${port}`);
    });