const mongoose = require("mongoose"); //モジュールロード
const m_driver = require("./models/m_driver.js");
const seedDriver = require("./models/m_driver.js");
const position = require("./models/m_position.js");

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/uniq_db`,
  { userNewParser: true }
);
mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

seedDriver.findOne({ name: "driverTaro" }).populate("position").exec((error, data) => {
  console.log(data);
}
)
