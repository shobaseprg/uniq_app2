"use strict";

const InitTest = require('../models/init_test');

const test = () => {
  let initTest = new InitTest({
    name: "Taro",
    age: 20
  })
  initTest.save((error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
  })
}

module.exports = { test };
