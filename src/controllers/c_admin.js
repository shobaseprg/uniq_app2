"use strict";

const Position = require("../models/m_position.js");
const Driver = require("../models/m_driver.js");

const displayMap = (req, res, next) => {
  Driver.find().populate("position").exec((error, data) => {
    console.log(data);
  })
  res.render('admin/v_admin_displayMap');
}

const savePosition = (req, res, next) => {
  Driver.findOne({ name: "driverTaro" }).populate("position").exec((error, data) => {
    console.log(req.query.latitude_i_y);
    Position.findOneAndUpdate(
      { _id: data.position._id },
      {
        $set: {
          latitude_i_y: req.query.latitude_i_y,
          longitude_k_x: req.query.longitude_k_x
        }
      }
    ).exec();
  })
  res.redirect("/getPosition");
}

module.exports = { displayMap, savePosition };
