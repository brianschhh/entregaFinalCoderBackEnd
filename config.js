const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
});

module.exports = {
  PORT: process.env.PORT || "8080",
  NODE_ENV: process.env.NODE_ENV || "development",
  SECRET: process.env.SECRET || "secret",
  JWT_SECRET: process.env.JWT_SECRET || "JWT-secret",
  GMAIL_USER: process.env.GMAIL_USER || "brian.sch@gmail.com",
  MONGO_DB: process.env.MONGO_DB || "mongodb://localhost:27017/comercio",
};
