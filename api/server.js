const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoDbConnection = require("./config/db");
const userRoute = require("./routes/userRoute");
const userPostRoute = require("./routes/userPostRoute");

// Init Express.
const app = express();

// Init Environment variables.
dotenv.config();
const PORT = process.env.PORT || 4000;

// Middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Static folder.
app.use(express.static("./public"));

// Routes.
app.use("/api/v1/user", userRoute);
app.use("/api/v1/user/post", userPostRoute);

// Listen server.
app.listen(PORT, () => {
  mongoDbConnection();
  console.log(`Server is running on port ${PORT}`.bgMagenta.black);
});
