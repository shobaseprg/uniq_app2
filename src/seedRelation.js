const mongoose = require("mongoose"); //モジュールロード
const seedDriver = require("./models/m_driver.js");
const position = require("./models/m_position.js");
let d;
let p;

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/uniq_db`,
  { userNewParser: true }
);
mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

const getDriver = () => {
  return new Promise((resolve) => {
    seedDriver.find({}, (error, data) => {
      d = data;
      resolve()
    });
  })
}

const getPosition = () => {
  return new Promise((resolve) => {
    position.find({}, (error, data) => {
      p = data;
      resolve()
    });
  })
}

const promise = Promise.resolve();

promise.then(getDriver).then(getPosition).then(() => {
  for (let i = 0; i < d.length; i++) {
    console.log(p[i]);
    console.log(d[i]);
    p[i].driver = d[i];
    d[i].position = p[i];
    p[i].save();
    d[i].save();
  }
})
