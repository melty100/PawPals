var express = require('express');
var router = express.Router();
var db = require("../models");
var path = require("path");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/getAll', function(req, res, next) {
    // res.send('respond with a resource');
     db.User.findAll({})
     .then((allUsers) => res.send(allUsers))
     .catch(err => res.status(422).json(err));

});

router.get('/getByUserName', function(req, res, next) {

    db.User.find({where: {userName: req.body.userName}})
    .then((dbUser) => res.send(dbUser))
    .catch(err => res.status(422).json(err));
});

router.post('/postUser', function(req, res, next) {
    db.User.create({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        petBio: req.body.petBio,
        userBio: req.body.userBIo
    })
    .then(() => {res.send("User Posted!")})
    .catch((err) => res.send(422).json(err));
});

//NOTE: Different routes for changing password?
router.put('/changeUser', isAuthenticated, function(req, res, next) {
    db.User.update({
        email: req.body.email,
        userName: req.body.newUserName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        petBio: req.body.petBio
    }, {
        where: {
            username : req.body.oldUserName
        }
    })
    .then(() => {res.send("User updated")})
    .catch((err) => res.send(422).json(err));
    
});

router.get('/getUserQuestions', function(req, res, next) {

    db.Question.findAll({where: {UserId : req.body.UserId}, include: [db.User]})
    .then((dbUserQuestions) => res.send(dbUserQuestions))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;