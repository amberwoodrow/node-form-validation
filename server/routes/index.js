var express = require('express');
var router = express.Router();
var puppies = require('../models/puppies');
var people = require('../models/people');

// HOME
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PUPPIES and peoples' });
});

// /PERSON/NEW
router.get('/person/new', function (req, res) {
  res.render('add-person', { title: 'PUPPIES and peoples' });
});

// /PUPPY/NEW
router.get('/puppy/new', function (req, res) {
  res.render('add-puppy', { title: 'PUPPIES and peoples' });
});


// /PUPPIES
router.get('/puppies', function (req, res) {
  res.render('puppies', { title: 'PUPPIES and peoples' });
});

router.post('/puppies', function (req, res) {
  puppies.puppies.push(req.body);

  // var pupName = req.body['puppy-name'];
  // var pupID = req.body['puppy-name'];

  res.render('puppies', { puppies : puppies.puppies}); // 'the view', {locals} <-- key and value, key is variable can be used in template
});


// /PEOPLE
router.get('/people', function (req, res) {
  res.render('people', { title: 'PUPPIES and peoples' });
});

router.post('/people', function (req, res) {
  people.people.push(req.body);

  // var peepName = req.body['person-name'];
  // var peepID = req.body['person-hobby'];

  res.render('people', { people : people.people });
});

module.exports = router;