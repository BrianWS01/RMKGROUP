const sharp = require('sharp');

sharp('assets/favicon_transparent.png')
  .flatten({ background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .png()
  .toFile('assets/favicon_black.png')
  .then(() => {
    console.log('Success! Saved as favicon_black.png');
  })
  .catch(err => {
    console.error('Error:', err);
  });
