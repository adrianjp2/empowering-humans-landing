const sharp = require('sharp');
const path = require('path');

async function generateCleanLogos() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's create high quality transparent dark-mode and light-mode versions
  // Find precise bounding box of non-white pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;

  const darkRgba = Buffer.alloc(width * height * 4);
  const lightRgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const outIdx = (y * width + x) * 4;

      // Brightness / distance from pure white (255, 255, 255)
      const distFromWhite = Math.sqrt(
        Math.pow(255 - r, 2) + Math.pow(255 - g, 2) + Math.pow(255 - b, 2)
      );

      if (distFromWhite < 15) {
        // Pure transparent for white background
        darkRgba[outIdx] = 0;
        darkRgba[outIdx + 1] = 0;
        darkRgba[outIdx + 2] = 0;
        darkRgba[outIdx + 3] = 0;

        lightRgba[outIdx] = 0;
        lightRgba[outIdx + 1] = 0;
        lightRgba[outIdx + 2] = 0;
        lightRgba[outIdx + 3] = 0;
      } else {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // Anti-aliasing alpha
        const alpha = Math.min(255, Math.round((distFromWhite / 50) * 255));

        // Check if red/coral
        const isRed = r > 140 && g < 90 && b < 90;

        if (isRed) {
          // Vibrant brand coral-red (#ff4d6d / #ff3366)
          darkRgba[outIdx] = 255;
          darkRgba[outIdx + 1] = 77;
          darkRgba[outIdx + 2] = 109; // #ff4d6d
          darkRgba[outIdx + 3] = alpha;

          lightRgba[outIdx] = 238;
          lightRgba[outIdx + 1] = 39;
          lightRgba[outIdx + 2] = 38; // original red
          lightRgba[outIdx + 3] = alpha;
        } else {
          // Dark navy -> Crisp pure white in dark mode
          darkRgba[outIdx] = 255;
          darkRgba[outIdx + 1] = 255;
          darkRgba[outIdx + 2] = 255;
          darkRgba[outIdx + 3] = alpha;

          lightRgba[outIdx] = 15;
          lightRgba[outIdx + 1] = 44;
          lightRgba[outIdx + 2] = 89; // original navy
          lightRgba[outIdx + 3] = alpha;
        }
      }
    }
  }

  const padding = 24;
  const cropX = Math.max(0, minX - padding);
  const cropY = Math.max(0, minY - padding);
  const cropW = Math.min(width - cropX, (maxX - minX) + padding * 2);
  const cropH = Math.min(height - cropY, (maxY - minY) + padding * 2);

  console.log(`Cropping logo to: ${cropW}x${cropH} at (${cropX}, ${cropY})`);

  // Save Dark Mode Full Logo (Crisp white + coral red)
  await sharp(darkRgba, { raw: { width, height, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/logo-dark.png'));

  // Save Light Mode Full Logo (Original navy + red, transparent bg)
  await sharp(lightRgba, { raw: { width, height, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/logo-light.png'));

  // Also create a resized high-res version optimized for web headers (e.g. 600px wide for 2x retina)
  const headerWidth = 500;
  await sharp(path.join(__dirname, '../public/logo-dark.png'))
    .resize({ width: headerWidth })
    .png()
    .toFile(path.join(__dirname, '../public/logo-dark-header.png'));

  console.log('Logos generated successfully!');
}

generateCleanLogos().catch(console.error);
