const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Connected To DB");
    console.log("Searver Is Running");
  });
});
