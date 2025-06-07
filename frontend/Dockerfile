# Gunakan base image Node.js versi 18
FROM node:18-alpine

# Tentukan direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu untuk caching
COPY package*.json ./

# Install semua dependensi (termasuk express)
RUN npm install

# Salin sisa dari kode aplikasi Anda
COPY . .

# Perintah ini akan membangun file CSS dari Tailwind sekali saja saat build
RUN npx tailwindcss -i ./public/src/input.css -o ./public/output.css --minify

# Beritahu Docker bahwa aplikasi akan berjalan di port 10000
EXPOSE 10000

# Perintah final untuk menjalankan aplikasi Anda menggunakan server Express
CMD ["node", "server.js"]