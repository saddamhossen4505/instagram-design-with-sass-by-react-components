const express = require("express");
const {
  getAllUser,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

// Init router.
const router = express.Router();

// Routes.
router.route("/").get(getAllUser).post(createUser);
router
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser);

// Export Router.
module.exports = router;
