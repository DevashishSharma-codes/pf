const fs = require("fs");
const path = require("path");

const newUpload = "/Users/devashishsharma/.gemini/antigravity-ide/brain/86fb9872-1e82-4ed3-b105-b9d3a5350262/.user_uploaded/media_1790874507144.jpg";
const publicDir = path.join(__dirname, "..", "public");

if (fs.existsSync(newUpload)) {
  const destAvatar = path.join(publicDir, "devashish.jpg");
  const destAvatarSquare = path.join(publicDir, "avatar.jpg");
  fs.copyFileSync(newUpload, destAvatar);
  fs.copyFileSync(newUpload, destAvatarSquare);
  console.log("Successfully copied new photo to public/devashish.jpg and public/avatar.jpg");
} else {
  console.error("New upload file not found at " + newUpload);
}
