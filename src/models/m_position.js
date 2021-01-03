"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = Schema({
  longitude_k_x: Number,
  latitude_i_y: Number,
  driver: { //Fatherモデルに所属//単数形
    type: Schema.Types.ObjectId, //外部キー
    ref: "Driver" //参照モデル
  }
});

module.exports = mongoose.model("Position", positionSchema);
