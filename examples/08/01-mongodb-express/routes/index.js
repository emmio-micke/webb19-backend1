var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST to Add User Service */
router.post('/adduser', function (req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username": userName,
    "email": userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");
    }
  });

});

/* GET Hello World page. */
router.get('/helloworld', function (req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET edit user page. */
router.get('/edituser/:userid', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  collection.find({ _id: req.params.userid }, {}, function (e, data) {
    res.render('edituser', {
      userdata: data
    });
  });
});

/* GET New User page. */
router.get('/newuser', function (req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST Update user. */
router.post('/updateuser', function (req, res) {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  let id = req.body.id;
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.update({'_id': id}, {
    $set: {
      'username': userName,
      'email': userEmail
    }
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem updating the information in the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");
    }
  });
});

/* GET Userlist page. */
router.get('/userlist', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function (e, docs) {
    res.render('userlist', {
      "userlist": docs
    });
  });
});

module.exports = router;
