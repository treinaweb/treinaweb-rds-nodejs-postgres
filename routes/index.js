var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.one('SELECT title FROM title')
    .then(function (data) {
      res.render('index', { title: data.title })
    })
    .catch(function (error) {
      res.render('error', { error: error })
    })
});

module.exports = router;
