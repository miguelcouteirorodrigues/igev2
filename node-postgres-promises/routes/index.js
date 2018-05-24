var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('home', { title: 'Informação Geográfica e Visualização' });
});

module.exports = router;
