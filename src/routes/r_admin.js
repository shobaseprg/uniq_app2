var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/displayMap', function (req, res, next) {
  res.render('admin/v_admin_displayMap');
});

module.exports = router;
