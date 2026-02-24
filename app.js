const express = require("express");
const helmet = require("helmet");

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.send("Service Home");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Listening");
});
