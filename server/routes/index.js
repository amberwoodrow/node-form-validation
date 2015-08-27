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
  res.render('puppies', { puppies : puppies.puppies});
});

router.post('/puppies', function (req, res) {

  var locals = { puppies : puppies.puppies, success: "Created puppy! Success!" };
  var addPuppyLocals = {};

  var pupName = req.body['puppy-name'];
  var pupID = req.body['puppy-id'];

  if (pupName === "") {
    addPuppyLocals.nameError = "Name can't be blank.";
  }
  if (pupID === "") {
    addPuppyLocals.idError = "Id can't be blank.";
  }
  if (pupID.length < 3) {
    addPuppyLocals.idLengthErr = "Id must be at least 3 characters long.";
  }

  if (Object.keys(addPuppyLocals).length > 0) {
    res.render('add-puppy', addPuppyLocals);
  }
  else {
    puppies.puppies.push(req.body);
    res.render('puppies', locals); // 'the view', {locals} <-- key and value, key is variable can be used in template
  }

});


// /PEOPLE
router.get('/people', function (req, res) {
  res.render('people', { people : people.people });
});

router.post('/people', function (req, res) {
  var addPeopleLocals = {};

  var peepName = req.body['person-name'];
  var peepHobby = req.body['person-hobby'];

  //peepName and peepHobby can't be blank
  if (peepName === "") {
    addPeopleLocals.nameError = "Name can't be blank.";
  }
  if (peepHobby === "") {
    addPeopleLocals.idError = "Id can't be blank.";
  }

  if (Object.keys(addPeopleLocals).length > 0) {
    res.render('add-person', addPeopleLocals);
  }
  else {
    people.people.push(req.body);
    res.render('people', { people : people.people, success: 'Success! Person created!' });  
  }

});

module.exports = router;

// can't be blank
// id for puppy must be at least 3 long