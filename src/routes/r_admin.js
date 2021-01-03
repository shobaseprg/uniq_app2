const express = require('express');
const router = express.Router();
const c_admin = require("../controllers/c_admin");

/* GET users listing. */
router.get('/displayMap', c_admin.displayMap);
router.get('/getCarPositions', c_admin.returnCarPositions);

module.exports = router;
