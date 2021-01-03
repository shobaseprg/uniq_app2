"use strict";

const mongoose = require("mongoose");
const Position = require("./m_position.js");
const Schema = mongoose.Schema;

const emailValidator = {
  validator: function (v) {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return pattern.test(v);
  },
  message: '`{VALUE}` is invalid syntax of `{PATH}`'
}

const driverSchema = Schema({
  name: {
    type: String,
    // required: true,  //必須
  },
  email: {
    type: String,
    // required: true,  //必須
    // unique: true     //ユニーク
  },
  telNumber: {
    type: Number,
  },
  status: {
    type: Number,
    min: 0,
    max: 99
  },
  position: { //Fatherモデルに所属//単数形
    type: Schema.Types.ObjectId, //外部キー
    ref: "Position" //参照モデル
  }
});

module.exports = mongoose.model("Driver", driverSchema);
