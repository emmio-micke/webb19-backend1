var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function (e, docs) {
    res.render('users/list', {
      "userlist": docs
    });
  });
});

/* GET delete user. */
router.get('/:userid/delete', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  collection.remove({ _id: req.params.userid }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem deleting the information in the database.");
    }
    else {
      // And forward to success page
      res.redirect("/users");
    }
  });
});

/* GET edit user page. */
router.get('/:userid/edit', function (req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  collection.find({ _id: req.params.userid }, {}, function (e, data) {
    res.render('users/edit', {
      userdata: data
    });
  });
});

/* GET New User page. */
router.get('/add', function (req, res) {
  res.render('users/add', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/add', function (req, res) {

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
      res.redirect("/users");
    }
  });

});

/* POST Update user. */
router.post('/update', function (req, res) {
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
      res.redirect("/users");
    }
  });
});

module.exports = router;
