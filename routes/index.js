var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('batata')
  db.one('SELECT 1 AS value')
    .then(function (data) {
      console.log('entrou')
      console.log(data)
      res.render('index', { title: data.value})
    })
    .catch(function (error) {
      console.log('erro')
      console.error(error)
      res.render('index', { error: error.value})
    })
});

module.exports = router;
