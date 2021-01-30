
require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? ".env.test" : ".env",
});

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err) => {
  if (err) console.log(err);
});


mongoose.Promise = global.Promise;

module.exports = mongoose;