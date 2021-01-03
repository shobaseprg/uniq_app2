var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/displayMap', function (req, res, next) {
  res.render('admin/v_admin_displayMap', { googleMapUrl: process.env.GOOGLE_MAP_API_KEY });
  console.log("【ログ】process.env.GOOGLE_MAP_API_KEY【結果➡︎】"); console.log(process.env.GOOGLE_MAP_API_KEY);

});

module.exports = router;
