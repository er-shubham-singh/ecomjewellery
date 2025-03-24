const multer = require("multer");
const path = require("path");

const storage = (destination) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
  });

const uploads = (destination) => multer({ storage: storage(destination) });

module.exports = { uploads };
