const fs = require("fs");
const path = require("path");

async function generateFavicon() {
  const root = path.join(__dirname, "..");
  const srcImage = path.join(root, "public", "devashish.jpg");

  if (!fs.existsSync(srcImage)) {
    console.error("Source image does not exist:", srcImage);
    return;
  }

  try {
    const sharp = require("sharp");
    console.log("Using sharp to generate favicons...");

    // Create 32x32 png, 192x192 png, 512x512 png, and overwrite favicon.ico & app/favicon.ico & app/icon.png
    await sharp(srcImage)
      .resize(32, 32, { fit: "cover" })
      .toFormat("png")
      .toFile(path.join(root, "app", "icon.png"));

    await sharp(srcImage)
      .resize(180, 180, { fit: "cover" })
      .toFormat("png")
      .toFile(path.join(root, "app", "apple-icon.png"));

    await sharp(srcImage)
      .resize(32, 32, { fit: "cover" })
      .toFile(path.join(root, "app", "favicon.ico"));

    await sharp(srcImage)
      .resize(32, 32, { fit: "cover" })
      .toFile(path.join(root, "public", "favicon.ico"));

    await sharp(srcImage)
      .resize(32, 32, { fit: "cover" })
      .toFormat("png")
      .toFile(path.join(root, "public", "icon.png"));

    console.log("Successfully generated and replaced all favicon files with Devashish's image!");
  } catch (err) {
    console.log("Sharp error or not found, falling back to direct copy: ", err.message);
    fs.copyFileSync(srcImage, path.join(root, "app", "favicon.ico"));
    fs.copyFileSync(srcImage, path.join(root, "public", "favicon.ico"));
  }
}

generateFavicon();
