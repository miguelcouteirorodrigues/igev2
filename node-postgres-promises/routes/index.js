var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('home', { title: 'Informação Geográfica e Visualização' });
});

router.get('/data/:id', db.getData);
router.get('/map.json', db.getMap);

module.exports = router;
