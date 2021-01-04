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
// 親
const parents =
  [
    {
      name: "driverTaro",
    },
    {
      name: "driverKen",
    },
    {
      name: "driverJiro",
    },
    {
      name: "driverKou",
    }
  ];

// 子
const children =
  [
    [//シードデーター
      { //自分の位置
        latitude_i_y: 1,
        longitude_k_x: 1
      },
    ],
    [
      {//都庁
        latitude_i_y: 35.6895014,
        longitude_k_x: 139.6917337,
      },
    ],
    [
      {//ドーム
        latitude_i_y: 35.705471,
        longitude_k_x: 139.751801,
      },
    ],
    [
      {//皇居
        latitude_i_y: 35.6802117,
        longitude_k_x: 139.7576692,
      },
    ]
  ];
//===================================
//データクリア
//===================================
seedDriver.deleteMany().exec()
position.deleteMany().exec()
//===================================
//ループ
//===================================
for (let i = 0; i < parents.length; i++) {
  parent = new seedDriver(parents[i]);
  for (let g = 0; g < children[i].length; g++) {
    let child = new position(children[i][g]);
    parent.position = child;
    child.driver = parent;
    child.save();
  }
  parent.save();
}
