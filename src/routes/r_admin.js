var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/displayMap', function (req, res, next) {
  res.send('map with a resource');
});

module.exports = router;
