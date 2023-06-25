const express = require("express");
const { userPost } = require("../controllers/userPostController");
const UserPhotoMulter = require("../middlewares/userPostMulter");

// Init router.
const router = express.Router();

// Routes.
router.route("/:id").post(UserPhotoMulter, userPost);

// Export router.
module.exports = router;
