"use strict";

const mongoose = require("mongoose");

const initTestSchema = new mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("InitTest", initTestSchema);
