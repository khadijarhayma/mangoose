const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server is running..." + process.env.PORT);
});
