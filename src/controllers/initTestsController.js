"use strict";

const InitTest = require('../models/init_test');

const test = () => {

  const initTest = new InitTest({
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

const getPosition = (req, res, next) => {
  res.render("test/v_test_getPosition");
}

module.exports = { test, getPosition };
