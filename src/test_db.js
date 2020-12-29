//mongooseをロード
const mongoose = require("mongoose");
//データーベース接続を設定
mongoose.connect(
  "mongodb://root:teama@mongo:27017/",
  { userNewParser: true }
);

mongoose.set("useCreateIndex", true);

//データーベースをdb変数に代入
const db = mongoose.connection;

//接続メッセージをログに出力する
db.once("open", () => {
  console.log("success connect");
});
