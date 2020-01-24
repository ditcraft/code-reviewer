var express = require('express');
var router = express.Router();
var contr_submit = require('../controllers/contr_submit.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.post('/submit', function(req, res, next) {
  console.log('Request: ', req.body);
  contr_submit.insertRequest(req.body, function(ID){
    res.send({ reference: ID });
  });
});

router.get('/success', function(req, res, next) {
  console.log('query:', req.query.id);
  res.render('success', { });
});

module.exports = router;
