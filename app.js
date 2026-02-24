const express = require("express");
const helmet = require("helmet");
const autocannon = require('autocannon')

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.send("Service home");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Listening");
});
