const mongoose = require("mongoose");

// Create UserSchema.
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
    },
    posts: {
      type: Array,
      default: [],
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    loginstatus: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Export userModel.
module.exports = mongoose.model("User", userSchema);
