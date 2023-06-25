const multer = require("multer");
const path = require("path");

// Create Storage.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.floor(Math.random() * 1000000) +
        "_" +
        file.originalname
    );
  },
});

// Create middleware.
const UserPhotoMulter = multer({
  storage: storage,
}).single("post");

// Export userPhotoMulter
module.exports = UserPhotoMulter;
