const mongoose = require("mongoose"); //モジュールロード
const seedDriver = require("./models/m_driver.js");

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/uniq_db`,
  { userNewParser: true }
);
mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

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
    mongoose.connection.close();
  })
  .catch(error => {
    console.log($error);
  });
