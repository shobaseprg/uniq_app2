const mongoose = require("mongoose"); //モジュールロード
const seedDriver = require("./models/m_driver.js");
const position = require("./models/m_position.js");


mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/uniq_db`,
  { userNewParser: true }
);
mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

//===================================
//driver
//===================================
const drivers = [ //シードデーター
  {
    name: "driverTaro",
  },
  {
    name: "driverKen",
  },
  {
    name: "driverJiro",
  }
];

seedDriver.deleteMany() //既存のデータをクリア
  .exec()
  .then(() => {
    console.log("Empty"); //確認用ログ
  });

let commands = []; //シーダー配列用

drivers.forEach((c) => { //commands配列にシーダーをループで全て追加
  commands.push(seedDriver.create({
    name: c.name,
  }));
});

Promise.all(commands) //全てのプロミス解決後の処理
  .then(r => {
    console.log(JSON.stringify(r));
  })
  .catch(error => {
    console.log($error);
  });

//===================================
//position
//===================================

const positions = [ //シードデーター
  {
    latitude_i_y: 35.720493999999995,
    longitude_k_x: 139.9311911
  },
];

position.deleteMany() //既存のデータをクリア
  .exec()
  .then(() => {
    console.log("Empty"); //確認用ログ
  });

let position_seeders = []; //シーダー配列用

positions.forEach((c) => { //commands配列にシーダーをループで全て追加
  position_seeders.push(position.create({
    latitude_i_y: c.latitude_i_y,
    longitude_k_x: c.longitude_k_x,
  }));
});

Promise.all(positions) //全てのプロミス解決後の処理
  .then(r => {
    console.log(JSON.stringify(r));
  })
  .catch(error => {
    console.log($error);
  });
