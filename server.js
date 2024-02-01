const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables from a database.config file
dotenv.config();

// create express app
const app = express();
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuring the database
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Importing DotEnv and config
require("dotenv").config();

// Initialize PORT
const port = process.env.PORT || 3000;
console.log(port);

// Route initial check
app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" }).then(() => {
    console.log("Check OK");
  });
});

// Import Routes
const superadminRouter = require("./app/routes/superadmin.route");
const congeRouter = require("./app/routes/conge.routes");
const employeRouter = require("./app/routes/employe.routes");
const userRouter = require("./app/routes/user.routes");
const rhRouter = require("./app/routes/Rh.routes");

// Routes Middlewares
app.use("/api/superadmins", superadminRouter);
app.use("/api/conges", congeRouter);
app.use("/api/employes", employeRouter);
app.use("/api/users", userRouter);
app.use("/api/rh", rhRouter);

// Try to Start the Server
const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Connect To DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected To DB Successfully!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Calling Func
start();
connectDB();
