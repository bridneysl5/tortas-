const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'img');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const filePath = path.join(dir, file);
    const parsed = path.parse(file);
    const newPath = path.join(dir, `${parsed.name}.webp`);
    
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(newPath)
      .then(() => {
        console.log(`Converted ${file} to WebP`);
        fs.unlinkSync(filePath); // delete old file
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
