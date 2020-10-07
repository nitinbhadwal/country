var express = require('express');
var router = express.Router();
var Country = require('../controllers/countryController');
/* GET users listing. */
router.get('/list', Country.list);

module.exports = router;
