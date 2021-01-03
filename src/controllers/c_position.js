"use strict";

const getPosition = (req, res, next) => {
  res.render("v_getPosition");
}

const savePosition = (req, res, next) => {
  res.redirect("/getPosition");

}

module.exports = { getPosition, savePosition };
