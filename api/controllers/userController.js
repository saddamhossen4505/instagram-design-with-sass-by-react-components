const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

// Get all user.
const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (users?.length > 0) {
    res.status(200).json(users);
  } else {
    res.status(400).json({ message: "No users found." });
  }
});

// Create User.
const createUser = asyncHandler(async (req, res) => {
  // GetData.
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check email already exits or not.
  const exitsEmail = await User.findOne({ email });

  if (exitsEmail) {
    return res.status(400).json({ message: "Email already exits." });
  }

  // Now create hashPassword.
  const hashPassword = await bcrypt.hash(password, 10);

  // Create User.
  const user = await User.create({
    name,
    email,
    username,
    password: hashPassword,
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid user data." });
  } else {
    return res.status(200).json(user);
  }
});

// Get singleUser.
const getSingleUser = asyncHandler(async (req, res) => {
  // Get id
  const { id } = req.params;
  const singleUser = await User.findById(id);
  if (!singleUser) {
    return res.status(400).json({ message: "User not found." });
  } else {
    return res.status(200).json(singleUser);
  }
});

// Delete user.
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(400).json({ message: "User delete failed" });
  }

  res.json(user);
});

// Edit user.
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, email, password, username } = req.body;

  // validation
  if (!name || !email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  user.name = name;
  user.email = email;
  user.password = await bcrypt.hash(password, 10);
  user.username = username;

  const updateUserData = await user.save();

  res.json({ message: `User updated successfull`, user: updateUserData });
});



// Export router.
module.exports = {
  getAllUser,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser
};
