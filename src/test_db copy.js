// const mongoose = require("mongoose");

// const MongoClient = mongodb.MongoClient

// let url = 'mongodb://owner:teama@mongo:27017/'
// let db_name = 'testdb'
// let collection_name = 'testUser'

// console.log(url)
// console.log(db_name)
// console.log(collection_name)

// const option = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }

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



// MongoClient.connect(url, option, (err, client) => {//mongodb接続
//   if (err != null || client == null) {
//     console.log("<<<ログ>>>fail")
//     console.log(err)
//   } else {
//     const db = client.db(db_name)
//     let rec = { "name": "Taro", "age": 30 }
//     db.collection(collection_name).insertOne(rec, (err, res) => {//テストデーター挿入
//       if (err != null) {
//         console.log("<<<ログ>>>err: insert")
//         console.log(err)
//         client.close()
//       } else {
//         db.collection(collection_name).find({}).toArray((err, result) => {//データー取り出し
//           if (err != null) {
//             console.log("<<<ログ>>>err: select")
//             console.log(err)
//             client.close()
//           } else {
//             console.log(result)//結果出力
//             client.close()
//           }
//         })
//       }
//     })
//   }
// })
