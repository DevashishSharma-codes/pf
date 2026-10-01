const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmnSVfatL1MzB8eLwiiFqhluhjUUoQqy5dQyd8QsUiw&s=10";
const target = path.join(__dirname, '../public/postman.png');

https.get(url, (res) => {
  const fileStream = fs.createWriteStream(target);
  res.pipe(fileStream);
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Postman logo saved successfully!');
  });
}).on('error', (err) => {
  console.error('Error downloading Postman logo:', err.message);
});
