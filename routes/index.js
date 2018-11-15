var express = require('express');
var persona = require('../public/stylesheets/persona')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    persona: persona
  }); //end render
}); //end get



module.exports = router;
