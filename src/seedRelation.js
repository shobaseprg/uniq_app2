const mongoose = require("mongoose"); //モジュールロード
const seedDriver = require("./models/m_driver.js");
const position = require("./models/m_position.js");

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/uniq_db`,
  { userNewParser: true }
);
mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

position.findOne({ latitude_i_y: 1 }).populate("driver").exec((error, data) => {
  console.log(data);
  console.log(data.driver.name);
})
