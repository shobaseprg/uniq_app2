//mongooseをロード
const mongoose = require("mongoose");
console.dir(process.env);
//データーベース接続を設定
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/`,
  { userNewParser: true }
);

mongoose.set("useCreateIndex", true);

//データーベースをdb変数に代入
const db = mongoose.connection;

//接続メッセージをログに出力する
db.once("open", () => {
  console.log("success connect");
})
