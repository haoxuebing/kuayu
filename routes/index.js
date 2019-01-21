var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let url =req.query.url;
  res.render('index', { url: url });
});

module.exports = router;
