const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// Create Post.
const userPost = asyncHandler(async (req, res) => {
  // Get id
  const { id } = req.params;

  // find User.
  const loginUser = await User.findById(id);

  if (!loginUser) {
    return res.status(404).json({ message: "User not found" });
  }

  // Get data.
  const post = req.files
  console.log(post);


});

// Export UserPost.
module.exports = {
  userPost,
};
