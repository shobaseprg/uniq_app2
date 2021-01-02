var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('v_index', { title: 'CAR MATCHING APP' });
});

module.exports = router;
